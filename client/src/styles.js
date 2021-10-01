import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 30px 30px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        // transition:"0.5s",
        // "&:hover":{
        //     cursor:"pointer",
        //     transform:"scale(0.5) translate(-15px)",
        //     backgroundColor: "red",
            
        // }
    },
    appBarheader:{
        borderRadius: 15,
        marginRight: "25px",
        // marginTop: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        
       
    },

   "@keyframes myfirst": {
        "0%" :{background: "brown", left:"0px", top:"0px"},
        // "25%" :{background: "grey", left:"10px", top:"0px"},
        // "50%" :{background: "brown", left:"10px", top:"10px"},
        // "75%" :{background: "green", left:"0px", top:"10px"},
        // "100%" :{background: "grey", left:"0px", top:"0px"},

    },

    heading:{
        backgroundColor:"#eeef",
        margin:"20px ",
         borderRadius:"50px",
         padding:"0px 10px",
         position: "relative",
         animation:`$myfirst 5s 2`,
         animationDirection:`alternate`,

    }
    
}));
