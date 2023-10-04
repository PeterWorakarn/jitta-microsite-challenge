import React from 'react'

const FootNote = () => {
  return (
    <section className='max-w-[510px] sm:px-0 px-10 py-10 w-full mx-auto text-netflix-gray'>
      <h2 className='text-3xl font-medium'>Methodology</h2>
      <br />
      <p className="text-base">Every Tuesday, we publish four global Top 10 lists for films and TV: Film (English), TV (English), Film (Non-English), and TV (Non-English). These lists rank titles based on ‘views’ for each title from Monday to Sunday of the previous week. We define views for a title as the total hours viewed divided by the total runtime. Values are rounded to 100,000.</p>
      <br />
      <p className="text-base">We consider each season of a series and each film on their own, so you might see both Stranger Things seasons 2 and 3 in the Top 10. Because titles sometimes move in and out of the Top 10, we also show the total number of weeks that a season of a series or film has spent on the list.
      </p>
      <br />
      <p className="text-base">To give you a sense of what people are watching around the world, we also publish Top 10 lists for nearly 100 countries and territories (the same locations where there are Top 10 rows on Netflix). Country lists are also ranked by views.
      </p>
      <br />
      <p className="text-base">Finally, we provide a list of the Top 10 most popular Netflix films and TV overall (branded Netflix in any country) in each of the four categories based on the views of each title in its first 91 days.
      </p>
      <br />
      <p className="text-base">Some TV shows have multiple premiere dates, whether weekly or in parts, and therefore the runtime increases over time. For the weekly lists, we show the views based on the total hours viewed during the week divided by the total runtime available at the end of the week. On the Most Popular List, we wait until all episodes have premiered, so you see the views of the entire season. For titles that are Netflix branded in some countries but not others, we still include all of the hours viewed.
      </p>
      <br />
      <p className="text-base">Information on the site starts from June 28, 2021 and any lists published before June 20, 2023 are ranked by hours viewed.
      </p>
      <br />
      <h3 className='text-3xl font-medium'>Download the lists</h3>
      <p className='text-base my-4'>All lists start on June 28, 2021</p>
      <p className='text-base font-medium'>Download Global Lists : <span><a className='underline text-netflix-red font-normal'>TSV</a>, <a className='underline text-netflix-red font-normal'>CSV</a></span></p>
      <p className='text-base font-medium'>Download Country Lists: <span><a className='underline text-netflix-red font-normal'>TSV</a>, <a className='underline text-netflix-red font-normal'>CSV</a></span></p>
      <p className='text-base font-medium'>Download Most Popular Lists: <span><a className='underline text-netflix-red font-normal'>TSV</a>, <a className='underline text-netflix-red font-normal'>CSV</a></span></p>
    </section>
  )
}

export default FootNote