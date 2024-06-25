const { createApp, ref } = Vue;

const app = createApp({
     template: `
       <h1>{{message}}</h1>
       <p>- {{author}}</p>
       `,

  setup() {
    //variables reactivas utilizando ref()
    const message = ref("Hola Soy Carlos");
    const author = ref("Administrador");

    const changeQuote = () => {
      message.value = "Soy Goku";
      author.value = "Peleador";
    };

    // setTimeout(()=>{
    //     //volviendo message en un objeto .value
    //     message.value = 'Soy Goku';
    //     author.value = 'Peleador'
    // },1000)

    return {
      message,
      author,
      changeQuote
    };
  },
});

app.mount("#myApp");
