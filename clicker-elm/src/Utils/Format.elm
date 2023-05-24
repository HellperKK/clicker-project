module Utils.Format exposing (formatNumber)

import Regex


formatFloat : Float -> String
formatFloat f =
    f
        |> String.fromFloat
        |> Regex.find (Maybe.withDefault Regex.never <| Regex.fromString "[0-9]+(\\.[0-9])?")
        |> List.map (\m -> m.match)
        |> (\l ->
                case l of
                    [] ->
                        String.fromFloat f

                    str :: _ ->
                        str
           )


formatNumber : Float -> String
formatNumber number =
    let
        magnitude =
            getNumberMagnitude number
    in
    formatFloat (number / 1000 ^ toFloat magnitude) ++ magnitudeToString magnitude


getNumberMagnitude : Float -> Int
getNumberMagnitude number =
    if number > 1000 then
        getNumberMagnitude (number / 1000) + 1

    else
        0


magnitudeToString : Int -> String
magnitudeToString number =
    case number of
        1 ->
            "k"

        2 ->
            "M"

        3 ->
            "B"

        4 ->
            "T"

        5 ->
            "Q"

        _ ->
            ""
