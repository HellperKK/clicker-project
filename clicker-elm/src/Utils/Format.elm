module Utils.Format exposing (..)

import Regex


formatFloat : Float -> String
formatFloat f =
    f
        |> String.fromFloat
        |> Regex.find (Maybe.withDefault Regex.never <| Regex.fromString "[0-9]+\\.?[0-9]{0,3}")
        |> List.map (\m -> m.match)
        |> (\l ->
                case l of
                    [] ->
                        String.fromFloat f

                    str :: _ ->
                        str
           )
