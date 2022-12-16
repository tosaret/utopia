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
        portfolioItems: {
          1: {
            logoUrl: rows[getRowByKey("logoUrl1")],
            title: rows[getRowByKey("title1")],
            tags: rows[getRowByKey("tags1")],
            description: rows[getRowByKey("description1")],
            imageUrl: rows[getRowByKey("imageUrl1")],
            backgroundImage: rows[getRowByKey("backgroundImage1")],
            backgroundGradient: rows[getRowByKey("backgroundGradient1")],
            tagsColor: rows[getRowByKey("tagsColor1")],
          },
          2: {
            logoUrl: rows[getRowByKey("logoUrl2")],
            title: rows[getRowByKey("title2")],
            tags: rows[getRowByKey("tags2")],
            description: rows[getRowByKey("description2")],
            imageUrl: rows[getRowByKey("imageUrl2")],
            backgroundImage: rows[getRowByKey("backgroundImage2")],
            backgroundGradient: rows[getRowByKey("backgroundGradient2")],
            tagsColor: rows[getRowByKey("tagsColor2")],
          },
          3: {
            logoUrl: rows[getRowByKey("logoUrl3")],
            title: rows[getRowByKey("title3")],
            tags: rows[getRowByKey("tags3")],
            description: rows[getRowByKey("description3")],
            imageUrl: rows[getRowByKey("imageUrl3")],
            backgroundImage: rows[getRowByKey("backgroundImage3")],
            backgroundGradient: rows[getRowByKey("backgroundGradient3")],
            tagsColor: rows[getRowByKey("tagsColor3")],
          },
          4: {
            logoUrl: rows[getRowByKey("logoUrl4")],
            title: rows[getRowByKey("title4")],
            tags: rows[getRowByKey("tags4")],
            description: rows[getRowByKey("description4")],
            imageUrl: rows[getRowByKey("imageUrl4")],
            backgroundImage: rows[getRowByKey("backgroundImage4")],
            backgroundGradient: rows[getRowByKey("backgroundGradient4")],
            tagsColor: rows[getRowByKey("tagsColor4")],
          },
          5: {
            logoUrl: rows[getRowByKey("logoUrl5")],
            title: rows[getRowByKey("title5")],
            tags: rows[getRowByKey("tags5")],
            description: rows[getRowByKey("description5")],
            imageUrl: rows[getRowByKey("imageUrl5")],
            backgroundImage: rows[getRowByKey("backgroundImage5")],
            backgroundGradient: rows[getRowByKey("backgroundGradient5")],
            tagsColor: rows[getRowByKey("tagsColor5")],
          },
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
