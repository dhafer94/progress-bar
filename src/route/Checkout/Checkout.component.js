import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ProgressBar } from "Component/ProgressBar/ProgressBar.component";

import ContentWrapper from "Component/ContentWrapper";

import "./Checkout.override.style";

export class Checkout extends SourceCheckout {
  render() {
    // console.log(this);
    return (
      <main block="Checkout">
        <ProgressBar
          activeStep={this.props.match.params.step}
          stepMap={this.stepMap}
        />

        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
