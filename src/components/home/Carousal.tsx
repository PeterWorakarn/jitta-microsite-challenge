import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import top10 from '../../../public/media/top10.png';
import Dropdown from './Dropdown';

enum ShowType {
  FILM = 'Films',
  TV = 'TV'
}

type TCarousalState = {
  type: ShowType;
  country: string;
}

export const countryOptions = [
  'Thailand',
  'Taiwan',
]

export const contentStack = [
  { type: ShowType.FILM, name: 'Thunder Monk', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/1.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaDwcycDLD5sQks4uOJ96JFqrfrh2LgZRwTXlLnjxxB6fQgVsAIU9PRhep213CGPN2ozekgUdM--zF48Vo-bK0yAefcy7-7XO-mZ.jpg?r=097' },
  { type: ShowType.FILM, name: 'Snow White & the Huntsman', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/2.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUfLrxkiDeqwzUvwCNRKdgdm2kqa1R789I782HD13zKrl7G2T9_avYIhm0KUwfAsUUHzhHB47skgmlfbqQFJh_f75BaQUlAX2wv_.jpg?r=ad3' },
  { type: ShowType.FILM, name: 'Once Upon a Crime', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/3.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV0AAu3LMNHlESKCfuHV7uZfPA55iCIoqV3eJ7id1IiqUDVTD7sIGakkSOZRZoUQm3TLp0KkH9wDjRJVtKqUjSG71YFeUmX3lMi8bygx-E7bUiMfzQPIZk-or0JPDadPB6bwlg.jpg?r=4aa' },
  { type: ShowType.FILM, name: 'Gangnam Zombie', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/4.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRqtNqZpBLJTqFkLxSP31s0RwA3EZXt8h-UJFLw4XryX8Kw_i9F23wB_9vd3hg5oH6h6ExQYa2Ja6-teQeXsMtUYwgfBbICEfYA0.jpg?r=c24' },
  { type: ShowType.FILM, name: 'Teenage Mutant Ninja Turtles 2', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/5.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSqq6dWY_V2tq51I0866lJqzLbbrCgKe4QKno1bCkheU_p_wU214VmSm0DcKb6IGo1WHZ2N8TInfVtFF478y-YZNrBCtxIRe5bcf.jpg?r=dfe' },
  { type: ShowType.FILM, name: 'Tiger Running', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/6.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfgL9pVOn2AugVOsK6mJuBDmn8-jwdupi_8Vcf7Sk1Q7DATf_fnEXvac7XoUvPcuwx4oG1UE3QCmf0qFuVFIf4LJQ3Gme4znMLBC.jpg?r=a6c' },
  { type: ShowType.FILM, name: 'Crawl', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/7.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT6_gr3G-bYrmcEvNO6D2SdG-imKSGBvaAdH8uq2XNdzHbWUX02zywCWpsqXMDty-cSwyZkfTBMQob4XajjBngUcdgjGrbt_h9wx.jpg?r=5f3' },
  { type: ShowType.FILM, name: 'Love at First Sight', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/8.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbjZxQMHc2KfwZoupRRArByFfMw23KD_5zQVUPlAmd0kE2tUaR_frX4m6FFV39C1qJSZ8GJfE100sQO7vlhKGWkrPLMR4VJR-nFu0I_5RQ4ldTgwoqKDuTq26R-gx9Z0zgWRWA.jpg?r=dfa' },
  { type: ShowType.FILM, name: 'Spy Kids: Armageddon', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/9.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeb5OEx0JJt1_IAGMm6WKMOnzp_i9Qt8Izl6GsvHtyqjgUCN0UOHy8cFg8qhdrOk3ZeqaFh5MY1U0HScBsD0j2wh8JvVX99dud6ErY41d-KQYWkOi4Ft038qgEcAd-5KfCXClg.jpg?r=bb5' },
  { type: ShowType.FILM, name: 'In Time', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/10.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABepinR8CqnB6hOAimn4ePMQE9MNDSSHvoBpXFlRlh_g5TueJgPlDQQ9P8eMKLGRFXgAO435QMaFhMcPmNDMmAERfoirHWaLdzx6I.jpg?r=43c' },
  { type: ShowType.TV, name: 'ONE PIECE: Season 1', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/1.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfTD_JK6jLY4EyZOO4zgblEHzF94XWZmVV2utStVNf2m3ibhdIlBPtOKlyCVWutIclDbr38k-Tf_rnwmCilN3hnW9hJ2efG0IlA_D9J9ylf2N-dn1phid6hcaNPiqVMyAtxyrQ.jpg?r=4fc' },
  { type: ShowType.TV, name: 'Sex Education: Season 4', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/2.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVlXNKwbuBUU98emZ6NzlVOl63PvM6LwYn3gEBmf1UEFWXfdriyyMCERmFdYUwztuboipSWC4hLaOhd7Hsk_MC2EsZMBHe8IV4CqjwUUalRs-sOQqXM9-Y9AiJKai9uaKQ5nwA.jpg?r=a3d' },
  { type: ShowType.TV, name: '6ixtynin9 The Series: Season 1', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/3.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUHrsvUCYhALq8PCHNJG463xmQ_sn-Bl6GyFK7M2nkbQoTnqJdOc7_uV2JrIf3qMoQXMQNrBogZsJ_kuvlI7EcKMfIVAJTDz7w6r9KUPMvbpRAApMNeul_q_i6nfyW8jldjZYw.jpg?r=572' },
  { type: ShowType.TV, name: 'The Bride of Naga', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/4.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcfhPZWyZls42rsqzBFZZz5wRtlR9kt8s62FwUiCNMzmeYiDKQJ7v8oIbYIHL6P7Bst0Wo5egXs27DE_dVuREL3y52LVBtCiXgfr.jpg?r=f60' },
  { type: ShowType.TV, name: 'Destined with You: Season 1', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/5.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeeolhREsr0j2HbkikoRSTQ053sCe-vNe77P1Re8k31hmRossDmbmKXwUEUNHtf-4ZS-uIDMvJo5Tx4rk2EorKbtc5gGd0KcQD1pyaj1o_i6D_gCqTygnn4xytgXKAmgcMll7Q.jpg?r=cac' },
  { type: ShowType.TV, name: 'Jujutsu Kaisen: Season 2', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/6.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW2EOrPANLhKb-5-a64MAvrg2vd9e55M3aYckFF6U27MyObUCB_3uHRfjBmfJpUnxVSCsTa0eiAOI-i1c9c3jfPqLYv2m9lqSc-H.jpg?r=932' },
  { type: ShowType.TV, name: 'A Time Called You: Season 1', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/7.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeFlWr2VhmzSKl6hscitXlGsGTyD_GcHdn6BenZHvZ3E0YLx_j8zXwpYSiwD12Xj1Z8R2h1tK_9-GgsSqaogcGqEA9nb3aT-AHAGwNBxHT8wMZhL8bDBJoH_SQytHwzVEf4wZA.jpg?r=202' },
  { type: ShowType.TV, name: 'Song of the Bandits: Season 1', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/8.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcuD4P2w7O1kFYxo7dZeN1uTpxPZFYzXsAmwxuFkpNaYE7zox9XNCj5KR3I8onKueiyhRK7FIwYsH4xzMd2Ue_crA_2pa_oyZBbcuL5vJQ9WTiOEyc0bQ5p4U1R9uqya1_qPIw.jpg?r=eec' },
  { type: ShowType.TV, name: 'The Cheery Lee, Village Headman', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/9.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY6Vx-wgEL2ns5aRp_5TEgnu_mGf7OYtS8LYnGpGWjFp1u17CsdKLsXT9to2WBscLslZa5r90oWRtXGpfEGW4pVk5TOVLwUlMPj9.jpg?r=71f' },
  { type: ShowType.TV, name: 'The Cheery Lee, Village Headman', number: 'https://www.netflix.com/tudum/top10/images/big_numbers/10.png', img: 'https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY6Vx-wgEL2ns5aRp_5TEgnu_mGf7OYtS8LYnGpGWjFp1u17CsdKLsXT9to2WBscLslZa5r90oWRtXGpfEGW4pVk5TOVLwUlMPj9.jpg?r=71f' },
]

const simpleMathTrick = (value: number) => {
  switch (value) {
    case 0:
      return 10;
    case 1:
      return 9;
    case 2:
      return 8;
    case 3:
      return 7;
    case 4:
      return 6;
    case 5:
      return 5;
    case 6:
      return 4;
    case 7:
      return 3;
    case 8:
      return 2;
    case 9:
      return 1;
  }
}

export const Carousal = () => {
  const [contentState, setContentState] = useState<TCarousalState>({
    type: ShowType.FILM,
    country: 'Thailand'
  })
  const [carousalState, setCarousalState] = useState(0);
  // state of selection
  return (
    <div className='-mt-10 sm:mt-0'>
      <section className="flex items-center justify-center gap-3 pt-2 pb-4 md:pt-8 w-fit mx-auto">
        <Image className="w-5 sm:w-12 h-auto" src={top10} alt="top 10 by country" />
        <div className='flex items-center justify-center gap-1'>
          <Dropdown
            options={
              Object.values(ShowType).map((eachType) => {
                return {
                  value: eachType,
                  label: eachType,
                }
              })}
            value={{ label: contentState.type, value: contentState.type }}
            setValue={(label, value) => setContentState({ ...contentState, type: value as ShowType })}
          />
          <span className='text-netflix-gray text-sm sm:text-2xl px-2 font-semibold'>in</span>
          <Dropdown
            options={
              countryOptions.map((eachCountry) => {
                return {
                  value: eachCountry,
                  label: eachCountry,
                }
              })}
            value={{ label: contentState.country, value: contentState.country }}
            setValue={(label, value) => setContentState({ ...contentState, country: value })}
          />
        </div>
      </section>

      <section className='w-full flex flex-row sm:h-[270px] lg:h-[435px] mx-auto'>
        {contentStack.filter(eachShow => eachShow.type === contentState.type).map((eachContent, idx) => {
          return (
            <button onClick={() => setCarousalState(idx)} key={eachContent.name} style={{ zIndex: simpleMathTrick(idx) }} className={`flex-1 relative shadow-sm transition-all carousal-card duration-150 box-content
            ${idx === carousalState ? 'basis-2/3 min-w-[224px] sm:max-w-[672px] sm:min-w-[672px] lg:min-w-[990px] lg:max-w-[990px]' : 'h-[147px] sm:h-auto lg:max-w-[30px] hover:max-w-none hover:basis-1/12'}`} type='button'>
              <div className='w-full h-full flex sm:flex-row flex-col-reverse'>
                {idx === carousalState ? (
                  <>
                    <div className='sm:min-w-[192px] lg:min-w-[256px] h-full sm:bg-netflix-black flex flex-col justify-between py-2 sm:py-5 px-1'>
                      <img className='hidden sm:block sm:w-[120px] mx-auto lg:w-[324px]' src={eachContent.number} />
                      <div>
                        <p className='text-netflix-white font-bold text-xs sm:text-xl'>{eachContent.name}</p>
                        <p className='text-netflix-white font-bold text-xs sm:text-xl'>#{idx + 1} this week</p>
                        <a href='#' className="text-netflix-red underline text-xs sm:text-lg">Watch now</a>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="highlight-number absolute top-1 right-1 sm:right-1.5 z-50 text-xs sm:text-base">
                    {idx + 1}
                  </p>
                )}
                <p className="block sm:hidden highlight-number absolute top-1 right-1 sm:right-1.5 z-50 text-xs sm:text-base">
                  {idx + 1}
                </p>
                <div className='w-full h-full'>
                  <img className={`h-full overflow-hidden w-full object-cover ${idx !== carousalState && 'brightness-50'}`} src={eachContent.img} />
                </div>
              </div>
            </button>
          )
        })}
      </section>

      <section className='max-w-[810px] mx-3 sm:mx-auto pt-5 w-full'>
        <p className='w-full text-center text-xs font-semibold sm:text-base text-netflix-white'>SEPTEMBER 18 - SEPTEMBER 24, 2023</p>
      </section>

      <div className='sm:px-0 px-3'>
        <section className='max-w-[810px] w-full list-weekly mx-auto my-5 p-4 rounded-md border border-white border-opacity-5'>
          <table className='w-full table-fixed'>
            <thead className='border-b border-b-netflix-gray'>
              <tr>
                <th className='py-2 text-netflix-gray w-10'>#</th>
                <th className='py-2 text-netflix-gray w-[70%] text-left'>Category</th>
                <th className='py-2 text-netflix-gray'>Weeks</th>
              </tr>
            </thead>
            <tbody>
              {contentStack.filter(eachShow => eachShow.type === contentState.type).map((eachContent, idx) => {
                return (
                  <tr key={eachContent.name}>
                    <td className='col-span-1 text-lg text-center font-semibold text-netflix-gray'>{idx + 1}</td>
                    <td className='col-span-7 text-lg font-semibold text-netflix-white'>{eachContent.name}</td>
                    <td className='col-span-4 text-lg  text-center font-semibold text-netflix-gray'>{idx + 1}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
