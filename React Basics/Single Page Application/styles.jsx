const wrapperStyle = {
    wrapper: {
      width: "100%",
      fontFamily: "Times New Roman, Verdana, Arial, sans-serif",
      fontSize: 16,
      padding: 16,
      boxSizing: "border-box",
      textAlign: "center",
    },
  };
  
  const navStyle = {
    nav: {
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
    },
    navLink: {
      flexBasis: "100",
      flexShrink: "1",
      margin: 2,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 4,
      paddingBottom: 4,
      fontSize: 12,
    },
  };
  
  const pageStyle = {
    table: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
    row: {
      width: "100%",
      marginBottom: 4,
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    column: {
      flexBasis: "50%",
      flexShrink: 1,
      flexGrow: 0,
      marginLeft: 4,
      marginRight: 4,
    },
  };
  
  export { wrapperStyle, navStyle, pageStyle };