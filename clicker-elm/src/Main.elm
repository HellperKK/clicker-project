module Main exposing (..)

import Array exposing (Array)
import Browser
import Components.Game exposing (game)
import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Message exposing (..)
import Model exposing (..)
import Time



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
    ( Model 0 0 buildings, Cmd.none )



-- UPDATE


updateMoney : Model -> Float
updateMoney model =
    model.money + (buildingsGain model.buildings |> toFloat |> (\x -> x / 10))


unlockBuildings : Model -> Array Building
unlockBuildings model =
    Array.map
        (\building ->
            if (toFloat building.basePrice * 0.5) <= model.money then
                { building | isUnlocked = True }

            else
                building
        )
        model.buildings


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        UpdateMoney _ ->
            ( { model | money = updateMoney model, buildings = unlockBuildings model }, Cmd.none )

        ChangeTab i ->
            ( { model | tabIndex = i }, Cmd.none )

        ChangeMoney amount ->
            ( { model | money = model.money + amount }, Cmd.none )

        BuyBuilding index ->
            ( { model | buildings = buyBuilding index model.buildings, money = model.money - toFloat (getBuildingPrice index model.buildings) }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Time.every 100 UpdateMoney



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
                    [ a [ onClick (ChangeTab 2) ] [ text "Achievements" ] ]
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
            [ text "1" ]
        , div
            [ class
                (if model.tabIndex /= 2 then
                    "hidden"

                 else
                    ""
                )
            ]
            [ text "2" ]
        ]
