import React, { Fragment, useRef, useEffect } from "react"
import "./logo.style.scss"
import { TweenMax, Power3 } from "gsap"

const LogoComponent = (props) => {
  let logoItem = useRef(null)
  let text = useRef(null)
  useEffect(() => {
    TweenMax.from(logoItem, 2.8, {
      opacity: 0,
      x: 1000,
      ease: Power3.easeOut,
    })

    TweenMax.from(text, 2, {
      y: 100,
    })
  }, [])

  return (
    <Fragment>
      <svg ref={el => logoItem = el}
           className={"logo "} viewBox="0 0 1172 334" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1,0,0,1,-654.574,-1683.01)">

          {/*symbol*/}
          <g transform="matrix(0.547798,0,0,0.547798,387.412,1006.54)">
            <g transform="matrix(0.303428,0,0,0.303428,625.98,968.888)">
              <path
                className="clip-2 letter"
                d="M1133.16,2263.94C1127.3,2263.94 1133.16,2116.94 1133.16,2116.94C1133.16,2116.94 898.657,1915.06 898.657,1732.44C898.657,1543.96 1051.68,1390.94 1240.16,1390.94C1428.64,1390.94 1581.66,1494.96 1581.66,1683.44C1581.66,1683.44 1656.51,1774.31 1696.37,1822.69C1701.79,1829.27 1703.56,1838.12 1701.09,1846.28C1698.61,1854.43 1692.23,1860.81 1684.07,1863.27C1642.88,1875.72 1581.66,1894.21 1581.66,1894.21C1572.78,2037.68 1533.39,2116.94 1385.16,2116.94"
              />
            </g>
            <g transform="matrix(2.03846e-17,-0.332906,0.332906,2.03846e-17,418.305,1871.73)">
              <path d="M1192.44,1777.44L1073.5,1732.44"
                    className='clip-2-symbol'/>
            </g>
            <g transform="matrix(2.03846e-17,-0.332906,0.332906,2.03846e-17,404.989,1871.73)">
              <path d="M1073.5,1732.44L1133.22,1656L1192.44,1732.44"
                    className='clip-2-symbol'/>
            </g>
            <g transform="matrix(2.03846e-17,0.332906,-0.332906,2.03846e-17,1599.57,1117.39)">
              <path d="M1073.5,1732.44L1133.22,1656L1192.44,1732.44"
                    className='clip-2-symbol'/>
            </g>
          </g>

          {/*letter*/}
          <g transform="matrix(0.547798,0,0,0.547798,549.929,1061.52)">
            <g transform="matrix(371.348,0,0,371.348,198,1565)">
              <path
                d="M0.064,0L0.223,-0.811L0.481,-0.225L0.75,-0.811L0.892,0L0.775,0L0.703,-0.455L0.479,0.035L0.263,-0.456L0.182,0L0.064,0Z"
                className='letter-fill let-in-1'/>
            </g>
            <g transform="matrix(371.348,0,0,371.348,886.844,1565)">
              <path
                d="M0.09,0L0.09,-0.805L0.64,-0.23L0.64,-0.754L0.754,-0.754L0.754,0.046L0.204,-0.528L0.204,0L0.09,0Z"
                className='letter-fill let-in-2'/>
            </g>
            <g transform="matrix(371.348,0,0,371.348,1202.89,1565)">
              <path
                d="M0.647,-0.739L0.647,-0.579C0.582,-0.634 0.514,-0.661 0.443,-0.661C0.366,-0.661 0.301,-0.633 0.248,-0.578C0.194,-0.522 0.167,-0.455 0.167,-0.375C0.167,-0.295 0.194,-0.229 0.248,-0.174C0.301,-0.12 0.366,-0.093 0.444,-0.093C0.484,-0.093 0.518,-0.099 0.546,-0.112C0.562,-0.119 0.578,-0.128 0.594,-0.139C0.611,-0.15 0.629,-0.163 0.647,-0.179L0.647,-0.042C0.582,-0.005 0.514,0.014 0.442,0.014C0.335,0.014 0.243,-0.024 0.167,-0.099C0.091,-0.175 0.053,-0.266 0.053,-0.374C0.053,-0.47 0.084,-0.555 0.148,-0.63C0.226,-0.722 0.327,-0.769 0.451,-0.769C0.519,-0.769 0.584,-0.776 0.647,-0.739Z"
                className='letter-fill let-in-3'/>
            </g>
            <g transform="matrix(371.348,0,0,371.348,1470.88,1565)">
              <path
                d="M0.204,-0.459L0.529,-0.459L0.529,-0.754L0.643,-0.754L0.643,0L0.529,0L0.529,-0.352L0.204,-0.352L0.204,0L0.09,0L0.09,-0.754L0.204,-0.754L0.204,-0.459Z"
                className='letter-fill let-in-4'/>
            </g>
            <g transform="matrix(371.348,0,0,371.348,1743.23,1565)">
              <path
                d="M0.533,-0.183L0.21,-0.183L0.126,0L0.004,0L0.377,-0.801L0.737,0L0.612,0L0.533,-0.183ZM0.487,-0.29L0.375,-0.546L0.258,-0.29L0.487,-0.29Z"
                className='letter-fill let-in-5'/>
            </g>
            <g transform="matrix(371.348,0,0,371.348,2018.3,1565)">
              <path
                d="M0.09,0L0.09,-0.805L0.64,-0.23L0.64,-0.754L0.754,-0.754L0.754,0.046L0.204,-0.528L0.204,0L0.09,0Z"
                className='letter-fill let-in-6'/>
            </g>
          </g>

          {/*trait*/}
          <g transform="matrix(1,0,0,1,1.65748,-29)">
            <rect x="655" y="2003" width="1167" height="40"
                  className='rec'/>
          </g>
          {/*trait*/}
          <g transform="matrix(1,0,0,1,1.65748,-317.907)">
            <rect x="655" y="2003" width="1167" height="40"
                  className='rec'/>
          </g>
        </g>

      </svg>
      <p ref={el => text = el} className="sub-title">Web Developer in Japan</p>
    </Fragment>
  )
}

export default LogoComponent
