import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([

  {
    id: '1',
    name: 'The Sax Music House', 
    img: 'https://img.wongnai.com/p/1920x0/2021/01/25/d89985104ddf41f48fc2852591138e60.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.800409351900758&lon=98.96791572621527&appid=43a65ec4cb235b315b9690be39dee775'
  },
  {
    id: '2',
    name: 'RISTR8TO', 
    img: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122709_994115998539684_3112291651868365063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmeB_NoSDiRFXlx_TqeAaAyvRieiRBKETK9GJ6JEEoRMcyKmZHrohXWo-dbdza-6jRB4sdmd9OWu0MqH5iXgYm&_nc_ohc=rtajCFoM960AX_jE87L&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdRZdSEPhjeaErraclcS7DPQE0FL96kmgfNTJEU2DOnlPw&oe=652BE18E',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.799129347568197&lon=98.96724666057406&appid=43a65ec4cb235b315b9690be39dee775'
  },
  {
    id: '3',
    name: 'di BOSCO COFFEE SPECIALIST THAILAND', 
    img: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377124405_845751270533460_2060598025526403964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFYHRG540bGoZdhHynUrdCvE1D2kYNE2iQTUPaRg0TaJCwuNgQIQTN0Nj6MxmK1A22P6H2gkhpO0OqW4JzAvJtB&_nc_ohc=alG10MBBdmEAX927vr4&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdROAzkAOj9mEoqcR4eZ8DbqvnvgA_1TLDf6LbNC-kWDDQ&oe=652BDD05',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.887932009910543&lon=98.8288837725823&appid=43a65ec4cb235b315b9690be39dee775'
  },
  {
    id: '4',
    name: 'LOOPER & CO.', 
    img: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122428_688862336450689_6270943685738234442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEE8-BOK5NCw7_ab-ufdi4vRuKhqZ_eW-xG4qGpn95b7MHXVW8GU-Y6LQD6JtLf41gghZryDwJfbCEKOJFAuO7W&_nc_ohc=pvXBEKmysQIAX8kE7UA&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdSTGZ62eAupGlnzeFkMgyIUTRQH047hQ3vLoZCpFr1jqw&oe=652BE109',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.793165186884657&lon=98.99677271171531&appid=43a65ec4cb235b315b9690be39dee775'
  },
  {
    id: '5',
    name: 'Nine One Coffee', 
    img: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377121513_854568835832443_4484750541489743961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEKSkApGNRlAUToJxhXYVCy2CgTlGQtVknYKBOUZC1WSQO0AKaRDypMx11ZgRJgpLvEV2zgUn-KdjIF8NYiAaMB&_nc_ohc=TSbgpLaS_QUAX_FZr4R&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdTfd2hFHMSxeFkwLim8ylfc_UD5pL2X4Abqcf_KmUrD6w&oe=652BEC45',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.79696046440793&lon=98.96694620210556&appid=43a65ec4cb235b315b9690be39dee775'
  },
  {
    id: '6',
    name: 'Sukhum Craft スクンクラフト', 
    img: 'https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122712_3446093835702557_9040405550870029248_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHuQ4DZUJ5NaYCEDgmIFuRc9GXvsC7Lcyv0Ze-wLstzK0JfZJOY4OKYKtDrm752AwN6rG0hDEpfQHMvvSOn1TOu&_nc_ohc=I08xGuD3ga0AX-ZE6Be&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdQ3CEZosO51vzsjzccrj0njPuNFmVIQMsqEA9DtzB8BOw&oe=652BD7D1',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.677282461682815&lon=98.91684405785871&appid=43a65ec4cb235b315b9690be39dee775'
  },

])

return { travel_list }
})
