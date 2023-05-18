module Main exposing (..)

import Array exposing (Array)
import Browser
import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (disabled)
import Html.Events exposing (onClick)
import Time
import Utils.Format exposing (formatFloat)



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


type alias Model =
    { money : Float
    , buildings : Array.Array Building
    }


init : () -> ( Model, Cmd msg )
init _ =
    ( Model 0 buildings, Cmd.none )



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


type Msg
    = ChangeMoney Float
    | BuyBuilding Int
    | UpdateMoney Time.Posix


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        UpdateMoney _ ->
            ( { model | money = updateMoney model, buildings = unlockBuildings model }, Cmd.none )

        ChangeMoney amount ->
            ( { model | money = model.money + amount }, Cmd.none )

        BuyBuilding index ->
            ( { model | buildings = buyBuilding index model.buildings, money = model.money - toFloat (getBuildingPrice index model.buildings) }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Time.every 100 UpdateMoney



-- VIEW


buildingsToButtons : Model -> List (Html Msg)
buildingsToButtons model =
    Array.filter (\building -> building.isUnlocked) model.buildings
        |> Array.indexedMap
            (\index building ->
                button
                    [ onClick (BuyBuilding index)
                    , disabled (toFloat (getBuildingPrice index model.buildings) > model.money)
                    ]
                    [ text (building.name ++ " " ++ String.fromInt (getBuildingPrice index model.buildings)) ]
            )
        |> Array.toList


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text ("Money : " ++ formatFloat model.money ++ " Gain : " ++ String.fromInt (buildingsGain model.buildings)) ]
        , button [ onClick (ChangeMoney 1) ] [ text "click" ]
        , div [] (buildingsToButtons model)
        ]
