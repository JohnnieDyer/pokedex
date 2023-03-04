'use client';

import { PokemonDetails } from "./data/dataTypes";

const HelperFunctions = {

    getFormattedIdNumber: (id: number) => {
        if (!id) {
            return '';
        }

        if (id < 10) {
            return '00' + id;
        }
        else if (id >= 10 && id < 100) {
            return '0' + id;
        }
        else {
            return '' + id;
        }
    },
    sortPokemonDataByID: (dataArray: PokemonDetails[]) => {
        dataArray.sort((x, y) => (x.id > y.id) ? 1 : ((y.id > x.id) ? -1 : 0));
        return dataArray;
    }
}

export default HelperFunctions;