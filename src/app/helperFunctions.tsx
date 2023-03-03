'use client';

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
    }
}

export default HelperFunctions;