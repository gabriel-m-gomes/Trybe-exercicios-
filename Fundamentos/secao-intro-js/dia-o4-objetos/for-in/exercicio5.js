let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };


  

  let info2 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinha',
    recorrente: 'sim'
  };

  for (let key in info) {
    if (
      key === 'recorrente' &&
      info[key] === 'Sim' &&
      info2[key] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }