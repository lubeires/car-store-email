const createEmailContent = (name) => ({
  subject: "Novidades Semanais e Ofertas Exclusivas na CarStore!",
  body: `
          Prezado(a) ${name},
        
          Gostaríamos de mantê-lo(a) sempre atualizado(a) sobre as últimas novidades e melhores ofertas da CarStore. Semanalmente, enviamos a você informações sobre os nossos novos veículos, bem como os modelos mais vendidos, além de apresentar condições especiais para aquisição. Esta semana, estamos empolgados em destacar alguns dos nossos carros mais recentes, cada um trazendo seu próprio conjunto de recursos e tecnologias impressionantes, enquanto também oferecemos condições de compra que tornam mais acessível realizar o seu desejo de ter um novo carro.
        
          Aqui estão nossos últimos lançamentos:
          
          Apresentando o elegante sedan de luxo, o CarStore Elegance: Este veículo combina um design sofisticado com tecnologia de ponta para uma experiência de condução incomparável.
        
          Conheça o versátil SUV familiar, o CarStore Voyager: Com espaço amplo e recursos de segurança avançados, este modelo é ideal para aventuras em família e viagens longas.
          
          Explore a potência e a elegância do CarStore Velocity: Este cupê esportivo é projetado para os entusiastas da velocidade, oferecendo um desempenho excepcional e um design aerodinâmico.
        
          Além disso, não deixe de conferir os modelos mais populares entre nossos clientes, conhecidos por sua qualidade e confiabilidade comprovadas ao longo do tempo.
          
          Para mais detalhes sobre esses veículos e as condições exclusivas que temos disponíveis, convidamos você a visitar nossa loja ou entrar em contato conosco diretamente.
          
          Estamos à disposição para ajudá-lo(a) a encontrar o carro perfeito para suas necessidades.
  `,
});

module.exports = createEmailContent;
