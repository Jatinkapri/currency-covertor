console.log("Main.js is working")

const populate = async (value, currency) => {
    let myStr = ""
    //url= "https://api.currencyapi.com/v3/latest?apikey=cur_live_uULbT9Tj4ZWj3rGwAcOb6eYvv6SocQtiK7PmVIqI" + currency
    //let response = await fetch(url)
    //let rJson = await response.json()
    let rJson= JSON.parse(`{
        "meta": {
          "last_updated_at": "2024-05-21T23:59:59Z"
        },
        "data": {
          "ADA": {
            "code": "ADA",
            "value": 2.0226074308
          },
          "AED": {
            "code": "AED",
            "value": 3.672980505
          },
          "AFN": {
            "code": "AFN",
            "value": 71.8348027712
          },
          "ALL": {
            "code": "ALL",
            "value": 92.3932182385
          },
          "AMD": {
            "code": "AMD",
            "value": 387.9199839255
          },
          "ANG": {
            "code": "ANG",
            "value": 1.7863103257
          },
          "AOA": {
            "code": "AOA",
            "value": 847.5259094206
          },
          "ARB": {
            "code": "ARB",
            "value": 0.8315648891
          },
          "ARS": {
            "code": "ARS",
            "value": 888.9938753836
          },
          "AUD": {
            "code": "AUD",
            "value": 1.4997601872
          },
          "AVAX": {
            "code": "AVAX",
            "value": 0.0242915662
          },
          "AWG": {
            "code": "AWG",
            "value": 1.79
          },
          "AZN": {
            "code": "AZN",
            "value": 1.7
          },
          "BAM": {
            "code": "BAM",
            "value": 1.8008103113
          },
          "BBD": {
            "code": "BBD",
            "value": 2
          },
          "BDT": {
            "code": "BDT",
            "value": 117.524999112
          },
          "BGN": {
            "code": "BGN",
            "value": 1.7974403345
          },
          "BHD": {
            "code": "BHD",
            "value": 0.376
          },
          "BIF": {
            "code": "BIF",
            "value": 2869.9712083694
          },
          "BMD": {
            "code": "BMD",
            "value": 1
          },
          "BNB": {
            "code": "BNB",
            "value": 0.0016212647
          },
          "BND": {
            "code": "BND",
            "value": 1.3464201446
          },
          "BOB": {
            "code": "BOB",
            "value": 6.9087906973
          },
          "BRL": {
            "code": "BRL",
            "value": 5.1139508216
          },
          "BSD": {
            "code": "BSD",
            "value": 1
          },
          "BTC": {
            "code": "BTC",
            "value": 0.0000142664
          },
          "BTN": {
            "code": "BTN",
            "value": 83.5449711801
          },
          "BWP": {
            "code": "BWP",
            "value": 13.5090118944
          },
          "BYN": {
            "code": "BYN",
            "value": 3.269936562
          },
          "BYR": {
            "code": "BYR",
            "value": 32699.370608113
          },
          "BZD": {
            "code": "BZD",
            "value": 2
          },
          "CAD": {
            "code": "CAD",
            "value": 1.3642002059
          },
          "CDF": {
            "code": "CDF",
            "value": 2801.6130820418
          },
          "CHF": {
            "code": "CHF",
            "value": 0.9108701497
          },
          "CLF": {
            "code": "CLF",
            "value": 0.0233700036
          },
          "CLP": {
            "code": "CLP",
            "value": 888.3094940021
          },
          "CNY": {
            "code": "CNY",
            "value": 7.2351713016
          },
          "COP": {
            "code": "COP",
            "value": 3823.6885632689
          },
          "CRC": {
            "code": "CRC",
            "value": 510.6300354001
          },
          "CUC": {
            "code": "CUC",
            "value": 1
          },
          "CUP": {
            "code": "CUP",
            "value": 24
          },
          "CVE": {
            "code": "CVE",
            "value": 101.5773900628
          },
          "CZK": {
            "code": "CZK",
            "value": 22.7693324205
          },
          "DAI": {
            "code": "DAI",
            "value": 1.0009506811
          },
          "DJF": {
            "code": "DJF",
            "value": 177.721
          },
          "DKK": {
            "code": "DKK",
            "value": 6.8724909493
          },
          "DOP": {
            "code": "DOP",
            "value": 58.5860394344
          },
          "DOT": {
            "code": "DOT",
            "value": 0.1314452427
          },
          "DZD": {
            "code": "DZD",
            "value": 135.0082741113
          },
          "EGP": {
            "code": "EGP",
            "value": 46.6290677783
          },
          "ERN": {
            "code": "ERN",
            "value": 15
          },
          "ETB": {
            "code": "ETB",
            "value": 57.4707813592
          },
          "ETH": {
            "code": "ETH",
            "value": 0.0002641905
          },
          "EUR": {
            "code": "EUR",
            "value": 0.9208600977
          },
          "FJD": {
            "code": "FJD",
            "value": 2.2609402648
          },
          "FKP": {
            "code": "FKP",
            "value": 0.7867197724
          },
          "GBP": {
            "code": "GBP",
            "value": 0.7867201314
          },
          "GEL": {
            "code": "GEL",
            "value": 2.7513303027
          },
          "GGP": {
            "code": "GGP",
            "value": 0.7867196924
          },
          "GHS": {
            "code": "GHS",
            "value": 14.4979219552
          },
          "GIP": {
            "code": "GIP",
            "value": 0.7867196763
          },
          "GMD": {
            "code": "GMD",
            "value": 58.275599559
          },
          "GNF": {
            "code": "GNF",
            "value": 8557.0778795375
          },
          "GTQ": {
            "code": "GTQ",
            "value": 7.7558709574
          },
          "GYD": {
            "code": "GYD",
            "value": 208.817586625
          },
          "HKD": {
            "code": "HKD",
            "value": 7.8032409042
          },
          "HNL": {
            "code": "HNL",
            "value": 24.697584234
          },
          "HRK": {
            "code": "HRK",
            "value": 6.6599710029
          },
          "HTG": {
            "code": "HTG",
            "value": 135.2545208718
          },
          "HUF": {
            "code": "HUF",
            "value": 354.9138953995
          },
          "IDR": {
            "code": "IDR",
            "value": 15971.601550524
          },
          "ILS": {
            "code": "ILS",
            "value": 3.6745305274
          },
          "IMP": {
            "code": "IMP",
            "value": 0.7867190524
          },
          "INR": {
            "code": "INR",
            "value": 83.2798496127
          },
          "IQD": {
            "code": "IQD",
            "value": 1308.2607839249
          },
          "IRR": {
            "code": "IRR",
            "value": 42067.112805455
          },
          "ISK": {
            "code": "ISK",
            "value": 138.3030625304
          },
          "JEP": {
            "code": "JEP",
            "value": 0.7867191693
          },
          "JMD": {
            "code": "JMD",
            "value": 155.527525739
          },
          "JOD": {
            "code": "JOD",
            "value": 0.71
          },
          "JPY": {
            "code": "JPY",
            "value": 156.2560244667
          },
          "KES": {
            "code": "KES",
            "value": 131.9866434779
          },
          "KGS": {
            "code": "KGS",
            "value": 88.1968497593
          },
          "KHR": {
            "code": "KHR",
            "value": 4073.3388571163
          },
          "KMF": {
            "code": "KMF",
            "value": 453.5450457421
          },
          "KPW": {
            "code": "KPW",
            "value": 900.0096852862
          },
          "KRW": {
            "code": "KRW",
            "value": 1361.3958372835
          },
          "KWD": {
            "code": "KWD",
            "value": 0.3059200477
          },
          "KYD": {
            "code": "KYD",
            "value": 0.83333
          },
          "KZT": {
            "code": "KZT",
            "value": 440.4477032806
          },
          "LAK": {
            "code": "LAK",
            "value": 21352.453921876
          },
          "LBP": {
            "code": "LBP",
            "value": 89551.580181275
          },
          "LKR": {
            "code": "LKR",
            "value": 299.5484752374
          },
          "LRD": {
            "code": "LRD",
            "value": 193.5740908822
          },
          "LSL": {
            "code": "LSL",
            "value": 18.0907930144
          },
          "LTC": {
            "code": "LTC",
            "value": 0.0113342618
          },
          "LTL": {
            "code": "LTL",
            "value": 3.1807473866
          },
          "LVL": {
            "code": "LVL",
            "value": 0.6474249711
          },
          "LYD": {
            "code": "LYD",
            "value": 4.8322907846
          },
          "MAD": {
            "code": "MAD",
            "value": 9.8836410278
          },
          "MATIC": {
            "code": "MATIC",
            "value": 1.372355929
          },
          "MDL": {
            "code": "MDL",
            "value": 17.545511918
          },
          "MGA": {
            "code": "MGA",
            "value": 4441.319399086
          },
          "MKD": {
            "code": "MKD",
            "value": 56.5812387513
          },
          "MMK": {
            "code": "MMK",
            "value": 2094.4933328947
          },
          "MNT": {
            "code": "MNT",
            "value": 3393.9515655141
          },
          "MOP": {
            "code": "MOP",
            "value": 8.0205311181
          },
          "MRO": {
            "code": "MRO",
            "value": 356.999828
          },
          "MRU": {
            "code": "MRU",
            "value": 39.6959281663
          },
          "MUR": {
            "code": "MUR",
            "value": 46.0145583416
          },
          "MVR": {
            "code": "MVR",
            "value": 15.4474119226
          },
          "MWK": {
            "code": "MWK",
            "value": 1733.0897541274
          },
          "MXN": {
            "code": "MXN",
            "value": 16.6148222254
          },
          "MYR": {
            "code": "MYR",
            "value": 4.6909105553
          },
          "MZN": {
            "code": "MZN",
            "value": 63.5721113947
          },
          "NAD": {
            "code": "NAD",
            "value": 18.0218731346
          },
          "NGN": {
            "code": "NGN",
            "value": 1529.8877567492
          },
          "NIO": {
            "code": "NIO",
            "value": 36.7953811652
          },
          "NOK": {
            "code": "NOK",
            "value": 10.6626519733
          },
          "NPR": {
            "code": "NPR",
            "value": 133.2704166159
          },
          "NZD": {
            "code": "NZD",
            "value": 1.6410102921
          },
          "OMR": {
            "code": "OMR",
            "value": 0.3839100597
          },
          "OP": {
            "code": "OP",
            "value": 0.3535589632
          },
          "PAB": {
            "code": "PAB",
            "value": 0.9992501401
          },
          "PEN": {
            "code": "PEN",
            "value": 3.7322007099
          },
          "PGK": {
            "code": "PGK",
            "value": 3.8419604988
          },
          "PHP": {
            "code": "PHP",
            "value": 58.2034606833
          },
          "PKR": {
            "code": "PKR",
            "value": 278.5162791352
          },
          "PLN": {
            "code": "PLN",
            "value": 3.9156005509
          },
          "PYG": {
            "code": "PYG",
            "value": 7531.3752379891
          },
          "QAR": {
            "code": "QAR",
            "value": 3.6393704496
          },
          "RON": {
            "code": "RON",
            "value": 4.5810905467
          },
          "RSD": {
            "code": "RSD",
            "value": 107.5344317801
          },
          "RUB": {
            "code": "RUB",
            "value": 90.2942407731
          },
          "RWF": {
            "code": "RWF",
            "value": 1295.2955754422
          },
          "SAR": {
            "code": "SAR",
            "value": 3.7424104768
          },
          "SBD": {
            "code": "SBD",
            "value": 8.2912933165
          },
          "SCR": {
            "code": "SCR",
            "value": 14.4254614473
          },
          "SDG": {
            "code": "SDG",
            "value": 601.5
          },
          "SEK": {
            "code": "SEK",
            "value": 10.6911317838
          },
          "SGD": {
            "code": "SGD",
            "value": 1.3470102572
          },
          "SHP": {
            "code": "SHP",
            "value": 0.7867201055
          },
          "SLL": {
            "code": "SLL",
            "value": 22576.98305311
          },
          "SOL": {
            "code": "SOL",
            "value": 0.0056159045
          },
          "SOS": {
            "code": "SOS",
            "value": 571.0243740565
          },
          "SRD": {
            "code": "SRD",
            "value": 32.3725951346
          },
          "STD": {
            "code": "STD",
            "value": 22893.550147373
          },
          "STN": {
            "code": "STN",
            "value": 22.8935583258
          },
          "SVC": {
            "code": "SVC",
            "value": 8.75
          },
          "SYP": {
            "code": "SYP",
            "value": 13001.877170007
          },
          "SZL": {
            "code": "SZL",
            "value": 18.0524721147
          },
          "THB": {
            "code": "THB",
            "value": 36.3960351192
          },
          "TJS": {
            "code": "TJS",
            "value": 10.8433617896
          },
          "TMT": {
            "code": "TMT",
            "value": 3.5
          },
          "TND": {
            "code": "TND",
            "value": 3.1108305254
          },
          "TOP": {
            "code": "TOP",
            "value": 2.3413503091
          },
          "TRY": {
            "code": "TRY",
            "value": 32.1708855036
          },
          "TTD": {
            "code": "TTD",
            "value": 6.7590011283
          },
          "TWD": {
            "code": "TWD",
            "value": 32.2796848298
          },
          "TZS": {
            "code": "TZS",
            "value": 2586.8778979724
          },
          "UAH": {
            "code": "UAH",
            "value": 39.7739872867
          },
          "UGX": {
            "code": "UGX",
            "value": 3805.8538909802
          },
          "USD": {
            "code": "USD",
            "value": 1
          },
          "USDC": {
            "code": "USDC",
            "value": 1.0013399033
          },
          "USDT": {
            "code": "USDT",
            "value": 1.0008679432
          },
          "UYU": {
            "code": "UYU",
            "value": 38.4437969337
          },
          "UZS": {
            "code": "UZS",
            "value": 12727.324880247
          },
          "VEF": {
            "code": "VEF",
            "value": 3651787.7309573
          },
          "VES": {
            "code": "VES",
            "value": 36.5178861637
          },
          "VND": {
            "code": "VND",
            "value": 25446.70351177
          },
          "VUV": {
            "code": "VUV",
            "value": 119.4818326005
          },
          "WST": {
            "code": "WST",
            "value": 2.7356222981
          },
          "XAF": {
            "code": "XAF",
            "value": 604.1004685552
          },
          "XAG": {
            "code": "XAG",
            "value": 0.0312205306
          },
          "XAU": {
            "code": "XAU",
            "value": 0.000412955
          },
          "XCD": {
            "code": "XCD",
            "value": 2.7
          },
          "XDR": {
            "code": "XDR",
            "value": 0.7549600807
          },
          "XOF": {
            "code": "XOF",
            "value": 604.100492455
          },
          "XPD": {
            "code": "XPD",
            "value": 0.0009708434
          },
          "XPF": {
            "code": "XPF",
            "value": 109.8316547721
          },
          "XPT": {
            "code": "XPT",
            "value": 0.0009491813
          },
          "XRP": {
            "code": "XRP",
            "value": 1.8636791401
          },
          "YER": {
            "code": "YER",
            "value": 249.4737137681
          },
          "ZAR": {
            "code": "ZAR",
            "value": 18.0606624649
          },
          "ZMK": {
            "code": "ZMK",
            "value": 9001.2
          },
          "ZMW": {
            "code": "ZMW",
            "value": 25.9854533914
          },
          "ZWL": {
            "code": "ZWL",
            "value": 13.2762932714
          }
        }
      }`)
    document.querySelector(".output").style.display="block"


    for (let key of Object.keys(rJson["data"])) {
        myStr += `  <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr>
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;


}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']");


    populate(value, currency)
})


