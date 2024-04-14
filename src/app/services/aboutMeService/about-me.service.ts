import { Injectable } from '@angular/core';
import { Perfil, ProfileGeneric, Vision } from 'src/app/shared/types/perfil';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  myProfile = {
    name: "Vinicius Politta",
    AboutMeSummary: "Olá! Me chamo Vinicius, um desenvolvedor de software experiente com 7 anos de experiência na área.\
    Minha jornada teve início com curiosidade e amor pela tecnologia, evoluindo para uma paixão \
    profunda pelo desenvolvimento de software."
  };

  aboutMe = "Iniciei essa jornada emocionante durante meus anos de faculdade. A emoção de resolver problemas complexos \
  e criar soluções elegantes me atraiu. À medida que mergulhei em linguagens de programação, \
  algoritmos e estruturas de dados, percebi que o desenvolvimento de software era mais do que uma carreira era minha vocação.";

  myVision = {
    title: "Impacto Inspirador",
    titleDescription: "Para mim, a programação vai além de simplesmente escrever linhas de código, trata-se de criar software que tem um impacto positivo na vida das pessoas. \
                       Seja melhorando os processos de negócio, fortalecendo diversos sistemas de saúde, financeira, transporte ou transformando a educação, minha missão é \
                       deixar uma marca significativa por meio do meu trabalho."
  };

  myPassions = {
    title: "Apaixonado por Tecnologia",
    titleDescription: "Sou aquela pessoa que espera com grande expectativa pelos mais recentes anúncios de tecnologia. Desde a computação em nuvem até a aprendizagem de máquina, \
                  eu me encanto com a forma como a tecnologia molda o nosso mundo. Não me contento apenas em utilizar ferramentas, eu quero compreender \
                  como elas funcionam por debaixo dos panos",
    subTitle: "Eterno Aprendiz",
    subtileDescripton: "O mundo da tecnologia está em constante evolução, e eu enxergo isso como uma janela de oportunidades. Absorvo avidamente blogs técnicos, marco presença em \
                         conferências e contribuo para projetos de código aberto. A aprendizagem não é uma etapa passageira; é um compromisso para toda a vida."
  };

  myApproach = {
    title: "Artesão do Codigo",
    titleDescription: "Acredito que escrever código é uma forma de arte. Assim como um pintor escolhe cuidadosamente suas cores e pincéis, escolho com cuidado minhas \
                  ferramentas e os padrões de design. Código limpo e fácil de manter é o que as pessoas conhecem como minha marca, e sou orgulhoso de desenvolver software que dura.",
    subTitle: "Solucionador de Problemas",
    subtileDescripton: "Desenvolvimento de software não se resume apenas a escrever linhas de código; é sobre resolver problemas do mundo real. Seja otimizando o desempenho,\
                aprimorando a experiência do usuário ou garantindo segurança, prospero ao encontrar soluções elegantes."
  };

  myJorney = {
    title: "Minha Jornada",
    titleDescription: "Durante os anos em que estive na faculdade, dei início a uma jornada emocionante. A emoção de resolver problemas\
                     complexos e criar soluções elegantes me atraiu desde o princípio. À medida que me aprofundei em linguagens de programação, \
                     algoritmos e estruturas de dados, uma clareza se instalou: o desenvolvimento de software transcende o mero aspecto profissional, \
                     tornando-se minha verdadeira vocação",
    subTitle: "Crescimento Profissional",
    subtileDescripton: "Ao longo dos últimos 7 anos, fui privilegiado por participar em uma variedade de projetos. Desde aplicações web \
                            até aplicativos móveis, aprimorei minhas habilidades em diversas áreas. Cada projeto representou uma valiosa oportunidade de aprendizado, \
                            motivando-me a explorar novas tecnologias e manter-me atualizado com as tendências do mercado."
  };

  resume = "Sou um desenvolvedor de software apaixonado, com 7 anos de experiência na área de Tecnologia da Informação. Minha trajetória \
            inclui desde o suporte técnico geral (formatação de equipamentos, configuração de redes) até o desenvolvimento de sistemas e a implementação \
            de melhorias em redes blockchain. Trabalhei em grandes empresas multinacionais, sempre buscando aprimorar minhas habilidades e contribuir para\
            projetos significativos. Vamos construir algo incrível juntos! 🌟🚀"

  constructor() { }


  getMyProfile(): Perfil {
    return this.myProfile;
  }

  getMyVision(): Vision {
    return this.myVision;
  }

  getMyPassions(): ProfileGeneric {
    return this.myPassions;
  }

  getMyApproach(): ProfileGeneric {
    return this.myApproach;
  }

  getMyJorney(): ProfileGeneric {
    return this.myJorney;
  }

  getResume(): string {
    return this.resume;
  }

  getAboutMe(): string {
    return this.aboutMe;
  }
}
