import Title from './title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, tDate, tTitle, text, state, days, price } = tour
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{tDate} </p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tTitle}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {state}
                  </p>
                  <p>{days} </p>
                  <p>{price} </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
