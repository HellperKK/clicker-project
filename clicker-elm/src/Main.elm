port module Main exposing (..)

import Array exposing (Array)
import Browser
import Components.Achievements exposing (achievementsTab)
import Components.Game exposing (game)
import Components.Options exposing (options)
import GameElements.AchievementRequirement exposing (AchievementRequirement(..))
import GameElements.Achivements exposing (Achievement, achievements)
import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Json.Encode as E
import Message exposing (..)
import Model exposing (..)
import Time



-- PORTS


port setStorage : E.Value -> Cmd msg


port getStorage : () -> Cmd msg


port getStorageApply : (String -> msg) -> Sub msg


port setFile : E.Value -> Cmd msg


port getFile : () -> Cmd msg


port getFileApply : (String -> msg) -> Sub msg



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


init : () -> ( Model, Cmd msg )
init _ =
    ( Model 0 False (GameState 0 buildings achievements), Cmd.none )



-- UPDATE


updateMoney : Model -> Float
updateMoney model =
    model.gameState.money + (buildingsGain model.gameState.buildings |> toFloat |> (\x -> x / 10))


unlockBuildings : Model -> Array Building
unlockBuildings model =
    Array.map
        (\building ->
            if (toFloat building.basePrice * 0.5) <= model.gameState.money then
                { building | isUnlocked = True }

            else
                building
        )
        model.gameState.buildings


evalAchievement : GameState -> AchievementRequirement -> Bool
evalAchievement state requirement =
    case requirement of
        AchievementBuildingQuantity buildingQuantity ->
            Array.get buildingQuantity.buildingId state.buildings
                |> Maybe.map (\building -> building.quantity >= buildingQuantity.quantity)
                |> Maybe.withDefault False


updateAchievements : Model -> ( Bool, Array Achievement )
updateAchievements model =
    let
        hasUnlocked =
            model.gameState.achievements
                |> Array.toList
                |> List.any (\achievement -> not achievement.isDiscovered && evalAchievement model.gameState achievement.condition)

        newAchivement =
            if hasUnlocked then
                Array.map
                    (\achievement ->
                        { achievement | isDiscovered = evalAchievement model.gameState achievement.condition }
                    )
                    model.gameState.achievements

            else
                model.gameState.achievements
    in
    ( hasUnlocked, newAchivement )


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        UpdateMoney _ ->
            let
                ( achievementUpdated, newAchievement ) =
                    updateAchievements model
            in
            ( { model
                | gameState =
                    { money = updateMoney model
                    , buildings = unlockBuildings model
                    , achievements = newAchievement
                    }
                , alert = model.alert || achievementUpdated
              }
            , Cmd.none
            )

        ChangeTab index ->
            ( { model | tabIndex = index }, Cmd.none )

        ChangeMoney amount ->
            ( { model
                | gameState =
                    { money = model.gameState.money + amount
                    , buildings = model.gameState.buildings
                    , achievements = model.gameState.achievements
                    }
              }
            , Cmd.none
            )

        BuyBuilding index ->
            ( { model
                | gameState =
                    { buildings = buyBuilding index model.gameState.buildings
                    , money = model.gameState.money - toFloat (getBuildingPrice index model.gameState.buildings)
                    , achievements = model.gameState.achievements
                    }
              }
            , Cmd.none
            )

        Reset ->
            let
                ( mod, cmd ) =
                    init ()
            in
            ( { mod | tabIndex = model.tabIndex }, cmd )

        Save ->
            ( model, Cmd.batch [ setStorage (encodeGameState model.gameState), Cmd.none ] )

        Load ->
            ( model, Cmd.batch [ getStorage (), Cmd.none ] )

        LoadApply str ->
            ( { model | gameState = decodeGameState str }, Cmd.none )

        Export ->
            ( model, Cmd.batch [ setFile (encodeGameState model.gameState), Cmd.none ] )

        Import ->
            ( model, Cmd.batch [ getFile (), Cmd.none ] )

        ImportApply str ->
            ( { model | gameState = decodeGameState str }, Cmd.none )

        ViewAchievements index ->
            ( { model | alert = False, tabIndex = index }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch [ Time.every 100 UpdateMoney, getStorageApply LoadApply, getFileApply ImportApply ]



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ div [ class "tabs" ]
            [ ul []
                [ li
                    [ class
                        (if model.tabIndex == 0 then
                            "is-active"

                         else
                            ""
                        )
                    ]
                    [ a [ onClick (ChangeTab 0) ] [ text "Game" ] ]
                , li
                    [ class
                        (if model.tabIndex == 1 then
                            "is-active"

                         else
                            ""
                        )
                    ]
                    [ a [ onClick (ChangeTab 1) ] [ text "Options" ] ]
                , li
                    [ class
                        (if model.tabIndex == 2 then
                            "is-active"

                         else
                            ""
                        )
                    ]
                    [ a [ onClick (ViewAchievements 2) ]
                        [ text "Achievements"
                        , if model.alert then
                            span [ class "has-text-info" ] [ text "NEW!" ]

                          else
                            span [ class "has-text-info" ] [ text "" ]
                        ]
                    ]
                ]
            ]
        , div
            [ class
                (if model.tabIndex /= 0 then
                    "hidden"

                 else
                    ""
                )
            ]
            [ game model ]
        , div
            [ class
                (if model.tabIndex /= 1 then
                    "hidden"

                 else
                    ""
                )
            ]
            [ options model ]
        , div
            [ class
                (if model.tabIndex /= 2 then
                    "hidden"

                 else
                    ""
                )
            ]
            [ achievementsTab model ]
        ]
