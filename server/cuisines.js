const cuisines = [
    { value: "Algerian cuisine", label: "Algerian cuisine" },
    { value: "Egyptian cuisine", label: "Egyptian cuisine" },
    { value: "Libyan cuisine", label: "Libyan cuisine" },
    { value: "Mauritanian cuisine", label: "Mauritanian cuisine" },
    { value: "Moroccan cuisine", label: "Moroccan cuisine" },
    { value: "Sudanese cuisine", label: "Sudanese cuisine" },
    { value: "Tunisian cuisine", label: "Tunisian cuisine" },
    { value: "Western Saharan cuisine", label: "Western Saharan cuisine" },
    { value: "Burundian cuisine", label: "Burundian cuisine" },
    { value: "Djiboutian cuisine", label: "Djiboutian cuisine" },
    { value: "Ethiopian cuisine", label: "Ethiopian cuisine" },
    { value: "Eritrean cuisine", label: "Eritrean cuisine" },
    { value: "Kenyan cuisine", label: "Kenyan cuisine" },
    { value: "Rwandan cuisine", label: "Rwandan cuisine" },
    { value: "Somali cuisine", label: "Somali cuisine" },
    { value: "South Sudanese cuisine", label: "South Sudanese cuisine" },
    { value: "Tanzanian cuisine", label: "Tanzanian cuisine" },
    { value: "Zanzibari cuisine", label: "Zanzibari cuisine" },
    { value: "Ugandan cuisine", label: "Ugandan cuisine" },
    { value: "Angolan cuisine", label: "Angolan cuisine" },
    { value: "Cameroonian cuisine", label: "Cameroonian cuisine" },
    { value: "Centrafrican cuisine", label: "Centrafrican cuisine" },
    { value: "Chadian cuisine", label: "Chadian cuisine" },
    {
      value: "Democratic Republic of the Congo cuisine",
      label: "Democratic Republic of the Congo cuisine",
    },
    {
      value: "The Republic of the Congo cuisine",
      label: "The Republic of the Congo cuisine",
    },
    { value: "Equatorial Guinean cuisine", label: "Equatorial Guinean cuisine" },
    { value: "Gabonese cuisine", label: "Gabonese cuisine" },
    {
      value: "São Tomé and Príncipe cuisine",
      label: "São Tomé and Príncipe cuisine",
    },
    { value: "Botswana cuisine", label: "Botswana cuisine" },
    { value: "Comoros cuisine", label: "Comoros cuisine" },
    { value: "Cuisine of Lesotho", label: "Cuisine of Lesotho" },
    { value: "Malagasy cuisine", label: "Malagasy cuisine" },
    { value: "Cuisine of Malawi", label: "Cuisine of Malawi" },
    { value: "Mauritian cuisine", label: "Mauritian cuisine" },
    { value: "Mozambique cuisine", label: "Mozambique cuisine" },
    { value: "Namibian cuisine", label: "Namibian cuisine" },
    { value: "Seychellois cuisine", label: "Seychellois cuisine" },
    { value: "South African cuisine", label: "South African cuisine" },
    { value: "Eswatini cuisine", label: "Eswatini cuisine" },
    { value: "Zambian cuisine", label: "Zambian cuisine" },
    { value: "Zimbabwean cuisine", label: "Zimbabwean cuisine" },
    { value: "Benin cuisine", label: "Benin cuisine" },
    { value: "Burkinabé cuisine", label: "Burkinabé cuisine" },
    { value: "Cape Verde cuisine", label: "Cape Verde cuisine" },
    { value: "The Cuisine of Niger", label: "The Cuisine of Niger" },
    { value: "Gambian cuisine", label: "Gambian cuisine" },
    { value: "Ghanaian cuisine", label: "Ghanaian cuisine" },
    { value: "Guinean cuisine", label: "Guinean cuisine" },
    { value: "Guinea-Bissauan cuisine", label: "Guinea-Bissauan cuisine" },
    { value: "Ivorian cuisine", label: "Ivorian cuisine" },
    { value: "Liberian cuisine", label: "Liberian cuisine" },
    { value: "Mali cuisine", label: "Mali cuisine" },
    { value: "Nigerian cuisine", label: "Nigerian cuisine" },
    { value: "Senegalese cuisine", label: "Senegalese cuisine" },
    { value: "Sierra Leone cuisine", label: "Sierra Leone cuisine" },
    { value: "Togolese cuisine", label: "Togolese cuisine" },
    { value: "American cuisine", label: "American cuisine" },
    { value: "Anguillan cuisine", label: "Anguillan cuisine" },
    {
      value: "Antigua and Barbuda cuisine",
      label: "Antigua and Barbuda cuisine",
    },
    { value: "Bahamian cuisine", label: "Bahamian cuisine" },
    { value: "Barbadian cuisine", label: "Barbadian cuisine" },
    { value: "Belizean cuisine", label: "Belizean cuisine" },
    { value: "Bermudian cuisine", label: "Bermudian cuisine" },
    {
      value: "British Virgin Islands cuisine",
      label: "British Virgin Islands cuisine",
    },
    { value: "Canadian cuisine", label: "Canadian cuisine" },
    { value: "Caymanian cuisine", label: "Caymanian cuisine" },
    { value: "Costa Rican cuisine", label: "Costa Rican cuisine" },
    { value: "Cuban cuisine", label: "Cuban cuisine" },
    { value: "Dominica cuisine", label: "Dominica cuisine" },
    { value: "Dominican Republic cuisine", label: "Dominican Republic cuisine" },
    { value: "Greenlandic cuisine", label: "Greenlandic cuisine" },
    { value: "Grenadan cuisine", label: "Grenadan cuisine" },
    { value: "Guatemalan cuisine", label: "Guatemalan cuisine" },
    { value: "Haitian cuisine", label: "Haitian cuisine" },
    { value: "Honduran cuisine", label: "Honduran cuisine" },
    { value: "Jamaican cuisine", label: "Jamaican cuisine" },
    { value: "Mexican cuisine", label: "Mexican cuisine" },
    { value: "Montserratian cuisine", label: "Montserratian cuisine" },
    { value: "Nicaraguan cuisine", label: "Nicaraguan cuisine" },
    { value: "Panamanian cuisine", label: "Panamanian cuisine" },
    { value: "Puerto Rican cuisine", label: "Puerto Rican cuisine" },
    { value: "Saint Barthélemy cuisine", label: "Saint Barthélemy cuisine" },
    { value: "Saint Lucian cuisine", label: "Saint Lucian cuisine" },
    { value: "Salvadoran cuisine", label: "Salvadoran cuisine" },
    {
      value: "Trinidadian and Tobagonian cuisine",
      label: "Trinidadian and Tobagonian cuisine",
    },
    {
      value: "United States Virgin Islands cuisine",
      label: "United States Virgin Islands cuisine",
    },
    { value: "Argentinian cuisine", label: "Argentinian cuisine" },
    { value: "Bolivian cuisine", label: "Bolivian cuisine" },
    { value: "Brazilian cuisine", label: "Brazilian cuisine" },
    { value: "Chilean cuisine", label: "Chilean cuisine" },
    { value: "Colombian cuisine", label: "Colombian cuisine" },
    { value: "Ecuadorian cuisine", label: "Ecuadorian cuisine" },
    { value: "Paraguayan cuisine", label: "Paraguayan cuisine" },
    { value: "Peruvian cuisine", label: "Peruvian cuisine" },
    { value: "Peruvian-Chinese cuisine", label: "Peruvian-Chinese cuisine" },
    { value: "Uruguayan", label: "Uruguayan" },
    { value: "Cuisine of Montevideo", label: "Cuisine of Montevideo" },
    { value: "Venezuelan cuisine", label: "Venezuelan cuisine" },
    { value: "Native American cuisine", label: "Native American cuisine" },
    { value: "Inuit cuisine", label: "Inuit cuisine" },
    { value: "Tlingit cuisine", label: "Tlingit cuisine" },
    { value: "Bukharan Jewish cuisine", label: "Bukharan Jewish cuisine" },
    { value: "Kazakh cuisine", label: "Kazakh cuisine" },
    { value: "Kyrgyz cuisine", label: "Kyrgyz cuisine" },
    { value: "Tajik cuisine", label: "Tajik cuisine" },
    { value: "Turkmen cuisine", label: "Turkmen cuisine" },
    { value: "Uzbek cuisine", label: "Uzbek cuisine" },
    { value: "Chinese cuisine", label: "Chinese cuisine" },
    { value: "Hong Kong cuisine", label: "Hong Kong cuisine" },
    { value: "Macau cuisine", label: "Macau cuisine" },
    { value: "Japanese cuisine", label: "Japanese cuisine" },
    { value: "Korean cuisine", label: "Korean cuisine" },
    { value: "Mongolian cuisine", label: "Mongolian cuisine" },
    { value: "Taiwanese cuisine", label: "Taiwanese cuisine" },
    { value: "Afghan cuisine", label: "Afghan cuisine" },
    { value: "Bangladeshi cuisine", label: "Bangladeshi cuisine" },
    { value: "Bhutanese cuisine", label: "Bhutanese cuisine" },
    { value: "Hazaragi cuisine", label: "Hazaragi cuisine" },
    { value: "Indian cuisine", label: "Indian cuisine" },
    { value: "Awadhi cuisine", label: "Awadhi cuisine" },
    { value: "Punjabi cuisine", label: "Punjabi cuisine" },
    { value: "Cuisine of Uttar Pradesh", label: "Cuisine of Uttar Pradesh" },
    { value: "Rajasthani cuisine", label: "Rajasthani cuisine" },
    { value: "Mughlai cuisine", label: "Mughlai cuisine" },
    { value: "Bhojpuri cuisine", label: "Bhojpuri cuisine" },
    { value: "Bihari cuisine", label: "Bihari cuisine" },
    { value: "Kashmiri cuisine", label: "Kashmiri cuisine" },
    { value: "Kerala cuisine", label: "Kerala cuisine" },
    { value: "Tamil cuisine", label: "Tamil cuisine" },
    { value: "Andhra cuisine", label: "Andhra cuisine" },
    { value: "Cuisine of Karnataka", label: "Cuisine of Karnataka" },
    {
      value: "Telangana - Hyderabadi cuisine",
      label: "Telangana - Hyderabadi cuisine",
    },
    { value: "Bengali cuisine", label: "Bengali cuisine" },
    { value: "Cuisine of Jharkhand", label: "Cuisine of Jharkhand" },
    { value: "Oriya cuisine", label: "Oriya cuisine" },
    { value: "Sikkimese cuisine", label: "Sikkimese cuisine" },
    { value: "Assamese cuisine", label: "Assamese cuisine" },
    { value: "Tripuri cuisine", label: "Tripuri cuisine" },
    { value: "Naga cuisine", label: "Naga cuisine" },
    { value: "Maharashtrian cuisine", label: "Maharashtrian cuisine" },
    { value: "Malvani cuisine", label: "Malvani cuisine" },
    { value: "Goan cuisine", label: "Goan cuisine" },
    { value: "Parsi cuisine", label: "Parsi cuisine" },
    { value: "Gujarati cuisine", label: "Gujarati cuisine" },
    { value: "Rajasthani cuisine", label: "Rajasthani cuisine" },
    { value: "Maithil cuisine", label: "Maithil cuisine" },
    { value: "Maldivian cuisine", label: "Maldivian cuisine" },
    { value: "Nepalese cuisine", label: "Nepalese cuisine" },
    { value: "Newari cuisine", label: "Newari cuisine" },
    { value: "Pakistani cuisine", label: "Pakistani cuisine" },
    { value: "Balochi cuisine", label: "Balochi cuisine" },
    { value: "Kashmiri cuisine", label: "Kashmiri cuisine" },
    { value: "Pashtun cuisine", label: "Pashtun cuisine" },
    { value: "Muhajir cuisine", label: "Muhajir cuisine" },
    { value: "Punjabi cuisine", label: "Punjabi cuisine" },
    { value: "Lahori cuisine", label: "Lahori cuisine" },
    { value: "Mughlai cuisine", label: "Mughlai cuisine" },
    { value: "Sindhi cuisine", label: "Sindhi cuisine" },
    { value: "Sri Lankan cuisine", label: "Sri Lankan cuisine" },
    { value: "Bruneian cuisine", label: "Bruneian cuisine" },
    { value: "Burmese cuisine", label: "Burmese cuisine" },
    { value: "Cambodian cuisine", label: "Cambodian cuisine" },
    { value: "Christmas Island cuisine", label: "Christmas Island cuisine" },
    { value: "Cuisine of East Timor", label: "Cuisine of East Timor" },
    { value: "Filipino cuisine", label: "Filipino cuisine" },
    { value: "Indonesian cuisine", label: "Indonesian cuisine" },
    { value: "Laotian cuisine", label: "Laotian cuisine" },
    { value: "Malaysian cuisine", label: "Malaysian cuisine" },
    { value: "Singaporean cuisine", label: "Singaporean cuisine" },
    { value: "Thai cuisine", label: "Thai cuisine" },
    { value: "Vietnamese cuisine", label: "Vietnamese cuisine" },
    { value: "Lebanese cuisine", label: "Lebanese cuisine" },
    { value: "Cypriot cuisine", label: "Cypriot cuisine" },
    { value: "Israeli cuisine", label: "Israeli cuisine" },
    { value: "Mesopotamian cuisine", label: "Mesopotamian cuisine" },
    { value: "Assyrian cuisine", label: "Assyrian cuisine" },
    { value: "Egyptian cuisine", label: "Egyptian cuisine" },
    { value: "Palestinian cuisine", label: "Palestinian cuisine" },
    { value: "Syrian cuisine", label: "Syrian cuisine" },
    { value: "Bahraini cuisine", label: "Bahraini cuisine" },
    { value: "Emirati cuisine", label: "Emirati cuisine" },
    { value: "Jordanian cuisine", label: "Jordanian cuisine" },
    { value: "Kuwaiti cuisine", label: "Kuwaiti cuisine" },
    { value: "Omani cuisine", label: "Omani cuisine" },
    { value: "Qatari cuisine", label: "Qatari cuisine" },
    { value: "Saudi Arabian cuisine", label: "Saudi Arabian cuisine" },
    { value: "Yemeni cuisine", label: "Yemeni cuisine" },
    { value: "Armenian cuisine", label: "Armenian cuisine" },
    { value: "Azerbaijani cuisine", label: "Azerbaijani cuisine" },
    { value: "Georgian cuisine", label: "Georgian cuisine" },
    { value: "Ossetian cuisine", label: "Ossetian cuisine" },
    { value: "Kurdish cuisine", label: "Kurdish cuisine" },
    { value: "Iranian cuisine", label: "Iranian cuisine" },
    { value: "Turkish cuisine", label: "Turkish cuisine" },
    { value: "Austrian cuisine", label: "Austrian cuisine" },
    { value: "Viennese cuisine", label: "Viennese cuisine" },
    { value: "Czech cuisine", label: "Czech cuisine" },
    { value: "Hungarian cuisine", label: "Hungarian cuisine" },
    { value: "Liechtensteiner cuisine", label: "Liechtensteiner cuisine" },
    { value: "Polish cuisine", label: "Polish cuisine" },
    { value: "Silesian cuisine", label: "Silesian cuisine" },
    { value: "Slovak cuisine", label: "Slovak cuisine" },
    { value: "Slovenian cuisine", label: "Slovenian cuisine" },
    { value: "Swiss cuisine", label: "Swiss cuisine" },
    { value: "German cuisine", label: "German cuisine" },
    { value: "Belarusian cuisine", label: "Belarusian cuisine" },
    { value: "Bulgarian cuisine", label: "Bulgarian cuisine" },
    { value: "Moldovan cuisine", label: "Moldovan cuisine" },
    { value: "Romani cuisine", label: "Romani cuisine" },
    { value: "Romanian cuisine", label: "Romanian cuisine" },
    { value: "Russian cuisine", label: "Russian cuisine" },
    { value: "Bashkir cuisine", label: "Bashkir cuisine" },
    { value: "Chechen cuisine", label: "Chechen cuisine" },
    { value: "Chukchi cuisine", label: "Chukchi cuisine" },
    { value: "Tatar cuisine", label: "Tatar cuisine" },
    { value: "Mordovian cuisine", label: "Mordovian cuisine" },
    { value: "Yamal cuisine", label: "Yamal cuisine" },
    { value: "Ukrainian cuisine", label: "Ukrainian cuisine" },
    { value: "Crimean Tatar cuisine", label: "Crimean Tatar cuisine" },
    { value: "Estonian cuisine", label: "Estonian cuisine" },
    { value: "Latvian cuisine", label: "Latvian cuisine" },
    { value: "Lithuanian cuisine", label: "Lithuanian cuisine" },
    { value: "Livonian cuisine", label: "Livonian cuisine" },
    { value: "English cuisine", label: "English cuisine" },
    { value: "Northern Irish cuisine", label: "Northern Irish cuisine" },
    { value: "Scottish cuisine", label: "Scottish cuisine" },
    { value: "Welsh cuisine", label: "Welsh cuisine" },
    { value: "Danish cuisine", label: "Danish cuisine" },
    { value: "Finnish cuisine", label: "Finnish cuisine" },
    { value: "Icelandic cuisine", label: "Icelandic cuisine" },
    { value: "Norwegian cuisine", label: "Norwegian cuisine" },
    { value: "Sami cuisine", label: "Sami cuisine" },
    { value: "Swedish cuisine", label: "Swedish cuisine" },
    { value: "Faroese cuisine", label: "Faroese cuisine" },
    { value: "Cypriot cuisine", label: "Cypriot cuisine" },
    { value: "Albanian cuisine", label: "Albanian cuisine" },
    { value: "Aromanian cuisine", label: "Aromanian cuisine" },
    { value: "Bosnian cuisine", label: "Bosnian cuisine" },
    { value: "Croatian cuisine", label: "Croatian cuisine" },
    { value: "Greek cuisine", label: "Greek cuisine" },
    { value: "Kosovan cuisine", label: "Kosovan cuisine" },
    { value: "Macedonian cuisine", label: "Macedonian cuisine" },
    { value: "Montenegrin cuisine", label: "Montenegrin cuisine" },
    { value: "Serbian cuisine", label: "Serbian cuisine" },
    { value: "Gibraltarian cuisine", label: "Gibraltarian cuisine" },
    { value: "Italian cuisine", label: "Italian cuisine" },
    { value: "Maltese cuisine", label: "Maltese cuisine" },
    { value: "Portuguese cuisine", label: "Portuguese cuisine" },
    { value: "Sammarinese cuisine", label: "Sammarinese cuisine" },
    { value: "Spanish cuisine", label: "Spanish cuisine" },
    { value: "Belgian cuisine", label: "Belgian cuisine" },
    { value: "Dutch cuisine", label: "Dutch cuisine" },
    { value: "French cuisine", label: "French cuisine" },
    { value: "Luxembourgian cuisine", label: "Luxembourgian cuisine" },
    { value: "Monégasque cuisine", label: "Monégasque cuisine" },
    { value: "Occitan cuisine", label: "Occitan cuisine" },
    { value: "Australian cuisine", label: "Australian cuisine" },
    { value: "Tasmanian cuisine", label: "Tasmanian cuisine" },
    { value: "Christmas Island cuisine", label: "Christmas Island cuisine" },
    { value: "New Zealand cuisine", label: "New Zealand cuisine" },
    { value: "Fijian cuisine", label: "Fijian cuisine" },
    { value: "Papua New Guinean cuisine", label: "Papua New Guinean cuisine" },
    { value: "Solomon Islands cuisine", label: "Solomon Islands cuisine" },
    { value: "Vanuatuan cuisine", label: "Vanuatuan cuisine" },
    { value: "Guamanian cuisine", label: "Guamanian cuisine" },
    { value: "Mariana Islands cuisine", label: "Mariana Islands cuisine" },
    { value: "Marshallese cuisine", label: "Marshallese cuisine" },
    { value: "Nauruan cuisine", label: "Nauruan cuisine" },
    { value: "Palauan cuisine", label: "Palauan cuisine" },
    { value: "Hawaiian cuisine", label: "Hawaiian cuisine" },
    { value: "Niuean cuisine", label: "Niuean cuisine" },
    {
      value: "Pascuense (Easter Island) cuisine",
      label: "Pascuense (Easter Island) cuisine",
    },
    { value: "Pitcairn Islands cuisine", label: "Pitcairn Islands cuisine" },
    { value: "Samoan cuisine", label: "Samoan cuisine" },
    { value: "Tuvaluan cuisine", label: "Tuvaluan cuisine" },
    { value: "Wallis and Futuna cuisine", label: "Wallis and Futuna cuisine" },
  ]
  
  export default cuisines
  