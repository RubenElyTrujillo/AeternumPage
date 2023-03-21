import React from 'react'
import client from '../libs/Client'
import Template from '../template/template'
import Cover from '../src/componets/Cover/cover'
import Section2 from '../src/componets/Section2/section2'
import Section3 from '../src/componets/Section3/section3'
import Section4 from '../src/componets/Section4/section4'

function Index({ home }){
  return(
    <Template title={'Home'}>
      <Cover section={home.section1} />
      <Section2 section={home.section2} />
      <Section3 section={home.section3} section2={home.section4} />
      <Section4 />
    </Template>
  )
}

export async function getServerSideProps(){
  const home = await client.fetch(
    `
        *[_type == "home" ][0]{
            ...
        }
    `
  )
  return{
      props: {
          home
      }
  }
}

export default Index