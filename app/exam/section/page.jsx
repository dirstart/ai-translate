const getImageUrl = (imageId, size = 's') => {
  return 'https://i.imgur.com/' + imageId + size + '.jpg'
}

const list = [
  {
    title: 'Maria Skłodowska-Curie',
    prefix: 'szV5sdG',
    profession: 'physicist and chemist',
    awardNum: 4,
    awardDesc:
      'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
    discoverDesc: 'polonium (chemical element)',
  }, {
    title: 'Katsuko Saruhashi',
    prefix: 'YfeOqp2',
    profession: 'geochemist',
    awardNum: 2,
    awardDesc: 'Miyake Prize for geochemistry, Tanaka Prize',
    discoverDesc: 'a method for measuring carbon dioxide in seawater'
  }
]

export function Profile({
  title,
  prefix,
  profession,
  awardNum,
  awardDesc,
  discoverDesc
}) {
  return (
    <section className='border-2 rounded-8 bg-blue-800'>
      <h2>{title}</h2>
      <img
        className="avatar rounded-8 bg-blue-800"
        src={getImageUrl(prefix)}
        alt={title}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardNum} </b>({awardDesc})
        </li>
        <li>
          <b>Discovered: </b>
          {discoverDesc}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {list.map(item => (
        <Profile key={item.title} {...item} />
      ))}
    </div>
  )
}
