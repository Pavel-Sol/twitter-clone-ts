import {makeStyles} from "@material-ui/core";

export const useStylesSignIn = makeStyles((theme) => ({
   wrapper: {
      display: 'flex',
      height: '100vh',
   },
   leftSide: {
      flex: '0 0 50%',
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
 
   leftSideList: {
    listStyle: 'none',
   },
 
   leftSideItem: {
      display: 'flex',
      marginBottom: 14,
      color: theme.palette.primary.contrastText
   },
   leftSideItemIcon: {
      position: 'relative',
      top: 5,
      marginRight: 10
   }, 
 
   rightSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   },
   rightSideWrapper: {
    maxWidth: '340px'
   },
 
   rightSideTwitterIcon: {
    color: theme.palette.primary.main,
    fontSize: 38,
   },
 
   rightSideTitle: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 20,
 
   },
   rightSideSubTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
 },
 loginSideField: {
    marginBottom: theme.spacing(5),
 },
 registerField: {
    marginBottom: theme.spacing(5),
 },
 loginFormControl: {
    marginBottom: theme.spacing(2),
 },
 }))