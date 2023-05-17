module Utils.Array exposing (..)

import Array exposing (Array)


updateArray : (Maybe a -> Maybe a) -> Int -> Array a -> Array a
updateArray updater index array =
    let
        cell =
            updater (Array.get index array)
    in
    case cell of
        Nothing ->
            array

        Just a ->
            Array.set index a array
