$(document).ready(() => {

    const inputFile = $('#fileUpload_inputFile')

    console.log(inputFile[0].files)

    $(document).on("change", inputFile, uploadFile)

    function uploadFile() {
        console.log(inputFile[0].files[0]['name'])
        console.log(inputFile[0].files.length)

        validadorNome()
    }


    function validadorNome() {
        let validadorIMPadrao = false
        let validadorIMClasse = false

        let i = inputFile[0].files.length

        for (let t = 0; t < i; t++) {
            let nome = inputFile[0].files[t]['name']


            let split_nome = nome.split('_')
            console.log(split_nome)

            if (split_nome[0] == 'IM' && split_nome[2] == 'semNP.csv') {
                validadorIMPadrao = true

            } else if (split_nome[0] == 'IM' && split_nome[1] == 'Classes' && split_nome[3] == 'semNP.csv') {
                validadorIMClasse = true
            }


            if (validadorIMPadrao) {
                if ($('#dot-spinner-IMPadrao').length > 0) {
                    $('#dot-spinner-IMPadrao').remove()
                    $('#IM_Texto-IMPadrao').before('<label class="container" id="container-IMPadrao"><input checked="checked" type="checkbox" disabled><div class="checkmark"></div></label>')
                }
            } else {
                if ($('#container-IMPadrao').length > 0) {
                    $('#container-IMPadrao').remove()
                    $('#IM_Texto-IMPadrao').before('<div class="dot-spinner" id="dot-spinner-IMPadrao"><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div></div>')
                }
            }

            if (validadorIMClasse) {
                if ($('#dot-spinner-IMClasse').length > 0) {
                    $('#dot-spinner-IMClasse').remove()
                    $('#IM_Texto-IMClasse').before('<label class="container" id="container-IMClasse"><input checked="checked" type="checkbox" disabled><div class="checkmark"></div></label>')
                }
            } else {
                if ($('#container-IMClasse').length > 0) {
                    $('#container-IMClasse').remove()
                    $('#IM_Texto-IMClasse').before('<div class="dot-spinner" id="dot-spinner-IMClasse"><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div></div>')
                }
            }
        }

        if (validadorIMClasse && validadorIMPadrao){
            $('.buttonSubmit').prop("disabled", false);
        }else{
            $('.buttonSubmit').prop("disabled", true);
        }
    }

})