import { PureComponent } from "react";
import "./ProgressBar.style";

export class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  // renderProgressBar(){
  //     return(
  //         <div>
  //             <h2> Progress</h2>
  //         </div>
  //     )
  // }

  render() {
    const steps = Object.values(this.props.stepMap).map((item) =>
      item.url.replaceAll("/", "")
    );

    let activeStep = this.props.activeStep;
    let index = steps.findIndex((st) => activeStep === st);
    console.log(index);

    return (
      <div className="progress-bar-container">
        {steps.map((step, i) =>
          i < steps.length - 1 ? (
            <div className="bar-item">
              <div className={index >= i ? "bar-active" : "bar"}></div>
              <div className="bar-title-number-container">
                <p className={index >= i ? "bar-number-active" : "bar-number"}>
                  {index <= i ? i + 1 : <span>&#10003;</span>}
                </p>
                <p className="bar-title">{step}</p>
              </div>
            </div>
          ) : (
            <div className="bar-item">
              <div className="bar"></div>
            </div>
          )
        )}
      </div>
    );
  }
}
