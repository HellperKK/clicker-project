module Components.Achievements exposing (..)

import Array
import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class)
import Message exposing (..)
import Model exposing (..)


achievementsToCard : Model -> List (Html Msg)
achievementsToCard model =
    model.gameState.achievements
        |> Array.filter (\achievement -> achievement.isDiscovered)
        |> Array.map
            (\achievement ->
                div [ class "card column is-2" ]
                    [ div
                        [ class "card-content" ]
                        [ p [ class "title is-4" ] [ text achievement.name ]
                        , div [ class "content" ] [ text achievement.description ]
                        ]
                    ]
            )
        |> Array.toList


achievementsTab : Model -> Html Msg
achievementsTab model =
    div [ class "columns  wrap is-3" ]
        (achievementsToCard model)
