module Components.Options exposing (..)

import GameElements.Buildings exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Message exposing (..)
import Model exposing (..)


options : Model -> Html Msg
options _ =
    div []
        [ button [ class "button", onClick Reset ] [ text "Reset" ]
        , button [ class "button", onClick Save ] [ text "Save" ]
        , button [ class "button", onClick Load ] [ text "Load" ]
        , button [ class "button", onClick Export ] [ text "Export" ]
        , button [ class "button", onClick Import ] [ text "Import" ]
        ]
