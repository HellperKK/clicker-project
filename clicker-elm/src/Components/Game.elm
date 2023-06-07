module Components.Game exposing (game)

import Array
import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class, disabled, src, title)
import Html.Events exposing (onClick)
import Message exposing (..)
import Model exposing (..)
import Utils.Format exposing (formatNumber)


buildingsToButtons : Model -> List (Html Msg)
buildingsToButtons model =
    Array.filter (\building -> building.isUnlocked) model.gameState.buildings
        |> Array.indexedMap
            (\index building ->
                div []
                    [ button
                        [ onClick (BuyBuilding index)
                        , disabled (toFloat (getBuildingPrice index model.gameState.buildings) > model.gameState.money)
                        , class "button max-width is-size-4"
                        , title (building.desc ++ " (" ++ String.fromInt building.moneyGain ++ "/s)")
                        ]
                        [ text (building.name ++ " (" ++ String.fromInt building.quantity ++ ") " ++ (getBuildingPrice index model.gameState.buildings |> toFloat |> formatNumber)) ]
                    ]
            )
        |> Array.toList


game : Model -> Html Msg
game model =
    div [ class "columns" ]
        [ div [ class "column is-one-third has-text-centered" ]
            [ p [ class "is-size-1" ]
                [ text
                    ("Money : "
                        ++ formatNumber model.gameState.money
                        ++ " (+"
                        ++ (buildingsGain model.gameState.buildings |> toFloat |> formatNumber)
                        ++ "/s)"
                    )
                ]
            , button [ class "transparent-button", onClick (ChangeMoney 1) ]
                [ img [ src "./images/burger.png" ] []
                ]
            , br [] []
            , button [ class "button", onClick (ChangeMoney 1000000000) ] [ text "Cheat" ]
            ]
        , div [ class "column" ]
            (div [ class "columns" ] [ div [ class "column" ] [] ]
                :: buildingsToButtons model
            )
        ]
