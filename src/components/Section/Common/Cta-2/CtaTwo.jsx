const CtaTwo = () => {
  return (
    <div className="wizebot-cta-section2">
      <div className="container">
        <div
          className="wizebot-cta-wrap"
          style={{ backgroundImage: "url(/images/v2/cta-bg.png)" }}
        >
          <div className="wizebot-cta-content">
            <h2>Teste a Wizebot Gratuitamente!</h2>
            <div className="wizebot-subscribe-two">
              <form action="#">
                <input type="email" placeholder="Enter your e-mail address" />
                <button
                  className="wizebot-default-btn wizebot-subscription-btn two"
                  id="wizebot-subscription-btn"
                  type="submit"
                >
                  <span>Comece Agora</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwo;
