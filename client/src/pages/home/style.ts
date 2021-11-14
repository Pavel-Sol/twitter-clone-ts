import {makeStyles} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStylesHome = makeStyles((theme) => ({
   homeWrapper: {
      height: '100vh'
   },
    sideMenuList:{
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
   },
   sideMenuListItem:{
      cursor: 'pointer',
      '& div': {
         display: 'inline-flex',
         alignItems: 'center',
         padding: '0 25px 0 20px',
         borderRadius: 30,
         height: 50,
         marginBottom: 12,
         transition: 'background-color 0.1s ease-in-out',
       },
       '&:hover': {
         '& div': {
           backgroundColor: 'rgba(29, 161, 242, 0.1)',
           '& h6': {
             color: theme.palette.primary.main,
           },
           '& svg path': {
             color: theme.palette.primary.main,
           },
         },
       },
   },
   logo: {
      margin: '10px 0',
   },
   logoIcon: {
      fontSize: 36,
   },
   sideMenuListItemIcon: {
      fontSize: 28,
      marginLeft: -5,
   },
   sideMenuListItemLabel: {
      fontSize: 18,
      marginLeft: 15,
   },
   sideMenuTweetButton: {
      padding: theme.spacing(3.2),
      marginTop: theme.spacing(2),
   },
   // -----------------------------------
   tweetsWrapper: {
      borderRadius: 0,
      height: '100%',
      borderTop: 0,
      borderBottom: 0,
   },
   tweetsHeader: {
      zIndex: 1,
      backgroundColor: 'rgb(245, 248, 250)',
      // width: '100%',
      position: 'sticky',
      top: 0,
      borderRadius: 0,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      padding: '10px 15px',
      '& h4': {
         margin: 0,
    },
   },

   addForm: {
      padding: '10px 15px',
   },
   tweetsCentered: {
   },

   tweet: {
      display: 'flex',
      alignItems: 'flex-start',
      '&:hover': {
         backgroundColor: 'rgb(245, 248, 250)',
      },
      cursor: 'pointer',
      padding: '15px 20px 0px 20px',
      borderRadius: 0,
   },
   tweetAvatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: 15,
   },
   tweetUserName: {
      color: grey[500],
      fontSize: 14,
    },
    tweetFooter: {
      display: 'flex',
      position: 'relative',
      left: -14,
      justifyContent: 'space-between',
      maxWidth: 450,
      marginTop: 20
    },

    tweetFooterIcon: {
      fontSize: 18,
    },

   // -----------------------------------
   rightSide: {},
   rightSideTextField: {}
}))