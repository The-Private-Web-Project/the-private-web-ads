/*
    TPWA (THE PRIVATE WEB ADS) CLIENT-SIDE SCRIPT

    * REPLACE "campaignjsonurl" WITH THE YOUR campaigns.json FILE ON YOUR WEBISTE,
    OR FOLLOW THE GUIDE IN THE README AND KEEP YOUR campaigns.json IN THE ROOT OF
    YOUR SITE, NEXT TO THIS SCRIPT

*/

const campaignjsonurl = "./campaigns.json";

window.tpwa = {
  campaigns: {
    async here() {
      const campaigns = await fetch(campaignjsonurl).then(r => r.json());

      const names = Object.keys(campaigns);
      const campaign = campaigns[
        names[Math.floor(Math.random() * names.length)]
      ][0];

      return campaign;
    }
  }
};