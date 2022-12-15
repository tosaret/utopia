import { google } from "googleapis";
export async function getData() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "data", // sheet name
    });

    const rows = response.data.values;
    const getRowByKey = (key) => {
      return rows.findIndex((el) => el[0] === key);
    };

    if (rows.length) {
      const data = {
        menu: {
          offer: rows[getRowByKey("menuOffer")],
          portfolio: rows[getRowByKey("menuPortfolio")],
          about: rows[getRowByKey("menuAbout")],
          contact: rows[getRowByKey("menuContact")],
        },
        hero: {
          slogan: rows[getRowByKey("heroSlogan")],
          readMore: rows[getRowByKey("heroReadMore")],
        },
        offersMenu: {
          web: rows[getRowByKey("offerMenuWeb")],
          mobile: rows[getRowByKey("offerMenuMobile")],
          consulting: rows[getRowByKey("offerMenuConsulting")],
          services: rows[getRowByKey("offerMenuServices")],
          cloud: rows[getRowByKey("offerMenuCloud")],
          design: rows[getRowByKey("offerMenuDesign")],
        },
        offers: {
          0: {
            title: rows[getRowByKey("offerTitle0")],
            text: rows[getRowByKey("offerText0")],
          },
          1: {
            title: rows[getRowByKey("offerTitle1")],
            text: rows[getRowByKey("offerText1")],
          },
          2: {
            title: rows[getRowByKey("offerTitle2")],
            text: rows[getRowByKey("offerText2")],
          },
          3: {
            title: rows[getRowByKey("offerTitle3")],
            text: rows[getRowByKey("offerText3")],
          },
          4: {
            title: rows[getRowByKey("offerTitle4")],
            text: rows[getRowByKey("offerText4")],
          },
          5: {
            title: rows[getRowByKey("offerTitle5")],
            text: rows[getRowByKey("offerText5")],
          },
          6: {
            title: rows[getRowByKey("offerTitle6")],
            text: rows[getRowByKey("offerText6")],
          },
        },
        portfolioIntro: {
          title: rows[getRowByKey("portfolioIntroTitle")],
          text: rows[getRowByKey("portfolioIntroText")],
        },
        leadersIntro: {
          title: rows[getRowByKey("leadersTitle")],
          text: rows[getRowByKey("leadersText")],
        },
        leadersItems: {
          1: {
            name: rows[getRowByKey("leaderName1")],
            photoUrl: rows[getRowByKey("leaderPhoto1")],
          },
          2: {
            name: rows[getRowByKey("leaderName2")],
            photoUrl: rows[getRowByKey("leaderPhoto2")],
          },
          3: {
            name: rows[getRowByKey("leaderName3")],
            photoUrl: rows[getRowByKey("leaderPhoto3")],
          },
          4: {
            name: rows[getRowByKey("leaderName4")],
            photoUrl: rows[getRowByKey("leaderPhoto4")],
          },
        },
        contactTexts: {
          contactName: rows[getRowByKey("contactName")],
          contactText: rows[getRowByKey("contactText")],
          placeholderEmail: rows[getRowByKey("placeholderEmail")],
          placeholderMessage: rows[getRowByKey("placeholderMessage")],
          checkboxText: rows[getRowByKey("checkboxText")],
          formSubmit: rows[getRowByKey("formSubmit")],
          formSubmitting: rows[getRowByKey("formSubmitting")],
        },
      };

      return data;
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
