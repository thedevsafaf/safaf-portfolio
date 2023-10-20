import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: black;
  padding: 20px 20px 100px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SupportTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 40px;
`;

const BuyMeACoffeeButton = styled.a`
  display: inline-block;
`;

const QrCodeImage = styled.img`
  display: block;
  margin-top: 20px;
  width: 150px;
  height: auto;
`;

function BuyMeACoffee() {
  return (
    <ButtonContainer>
      <SupportTitle>Fuel My Creativity ⛽</SupportTitle>
      <BuyMeACoffeeButton
        href="https://www.buymeacoffee.com/thedevelopersafaf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          height="50"
          width="210"
          alt="thedevelopersafaf"
        />
      </BuyMeACoffeeButton>
      <QrCodeImage src="bmc_qr.png" alt="QR Code" />
    </ButtonContainer>
  );
}

export default BuyMeACoffee;
