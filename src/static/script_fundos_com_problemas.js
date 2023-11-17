$(document).ready(() => {

    console.log(nulos_array)

    var html_alerta = ''

    for (var i = 0; i < principal_array.length; i++) {
        let linha = principal_array[i]

        let nome_fundo = linha[0]
        let cnpj = String(linha[1])

        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

        html_alerta += `<div class="fundosAlertaCard_linha"><p class="fundosAlertaCard_linha_Nome">${nome_fundo}</p><p class="fundosAlertaCard_linha_CNPJ">${cnpj}</p></div>`
    }

    $('#fundosCard_alerta').after(html_alerta)

    

    var html_liquidados = ''

    for (var i = 0; i < liquidados_array.length; i++) {
        let linha = liquidados_array[i]
        let nome_fundo = linha[0]
        let cnpj = String(linha[1])

        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

        html_liquidados += `<div class="fundosAlertaCard_linha"><p class="fundosAlertaCard_linha_Nome">${nome_fundo}</p><p class="fundosAlertaCard_linha_CNPJ">${cnpj}</p></div>`
    }

    $('#fundosCard_liquidados').after(html_liquidados)

    var html_nulos = ''

    for (var i = 0; i < nulos_array.length; i++) {
        let linha = nulos_array[i]
        let nome_fundo = linha[0]
        let cnpj = String(linha[1])

        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

        html_nulos += `<div class="fundosAlertaCard_linha"><p class="fundosAlertaCard_linha_Nome">${nome_fundo}</p><p class="fundosAlertaCard_linha_CNPJ">${cnpj}</p></div>`
    }

    $('#fundosCard_nulos').after(html_nulos)



    const divs = document.querySelectorAll(".fundosAlertaCard_linha");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("fundosAlertaCard_linha_hover");
        });

        div.addEventListener("mouseout", () => {
            div.classList.remove("fundosAlertaCard_linha_hover");
        });
    });

})