interface Info {
  name: {
    kor: string
    eng: string
  }
  url: string
}

export default function Home() {
  const gameInfos: Info[]= [
    {
      name: {
        kor: '아오오니',
        eng: 'Ao Oni'
      },
      url: '/aooni',
    },
    {
      name: {
        kor: '두근 두근 문예부!',
        eng: 'Doki Doki Literature Club!'
      },
      url: '/ddlc',
    },
    {
      name: {
        kor: '언더테일',
        eng: 'Undertale'
      },
      url: '/undertale',
    },
  ]


  return (
    <main>
      <div>
        <h1>
          게임 웹 사이트
        </h1>
      </div>
      <div>
        <ul>
          {
            gameInfos.map(({name, url}) =>
              <li key={url}>
                {name.kor}
                {name.eng}
                {url}
              </li>
            )
          }
        </ul>
      </div>
    </main>
  )
}

