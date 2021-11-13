import { Button, FormControl, FormGroup, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Modal from './../../components/Modal'
import { useState } from "react"
import {useStylesSignIn} from './style'


const SinIn: React.FC = (): React.ReactElement => {
   const classes = useStylesSignIn()
   const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp' | null>(null);

   // console.log(visibleModal)

    const handleClickOpenSignIn = (): void => {
        setVisibleModal("signIn");
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal("signUp");
    };

    const handleCloseModal = (): void => {
        setVisibleModal(null);
    };


   return (
      <div className={classes.wrapper}>
         <div className={classes.leftSide}>
            <ul className={classes.leftSideList}>
               <li className={classes.leftSideItem}>
                  <SearchIcon className={classes.leftSideItemIcon} />
                  <Typography variant="h6">
                     Читайте о том, что вам<br/> интересно
                  </Typography>
               </li>
               <li className={classes.leftSideItem}>
                  <PeopleOutlineIcon className={classes.leftSideItemIcon}/>
                  <Typography variant="h6">
                     Узнайте, о чем говорят в мире
                  </Typography>
               </li>
               <li className={classes.leftSideItem}>
                  <ChatBubbleOutlineIcon className={classes.leftSideItemIcon}/>
                  <Typography variant="h6">
                     Присоединяйся к общению
                  </Typography>
               </li>
            </ul>
         </div>
         <div className={classes.rightSide}>
            <div className={classes.rightSideWrapper}>
               <TwitterIcon className={classes.rightSideTwitterIcon}/>
               <Typography className={classes.rightSideTitle} >
                        Узнайте, что происходит в мире прямо сейчас
               </Typography>
               <Typography className={classes.rightSideSubTitle} >
                        Присоеденяйтесь к Твиттеру прямо сейчас
               </Typography>
               <Button onClick={handleClickOpenSignUp}
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{marginBottom: 20}}>
                  Зарегистрироваться
               </Button>
               <Button onClick={handleClickOpenSignIn}
                  variant="outlined"
                  color="primary"
                  fullWidth>
                  Войти
               </Button>
                                             {/* -------SinIn MODAL------- */}
               <Modal title="Войти в аккаунт" classes={classes} visible={visibleModal === 'signIn'} onClose={handleCloseModal}>
                  <FormControl className={classes.loginFormControl}
                              component="fieldset" fullWidth>
                     <FormGroup aria-label="position" row>
                        <TextField
                           className={classes.loginSideField}
                           autoFocus
                           id="email"
                           label="E-Mail"
                           InputLabelProps={{
                                 shrink: true,
                           }}
                           variant="filled"
                           type="email"
                           fullWidth
                        />
                        <TextField
                           className={classes.loginSideField}
                           autoFocus
                           id="password"
                           label="Пароль"
                           InputLabelProps={{
                                 shrink: true,
                           }}
                           variant="filled"
                           type="password"
                           fullWidth
                        />
                        <Button 
                           variant="contained" color="primary"
                           fullWidth>
                           Войти
                        </Button>
                     </FormGroup>
                  </FormControl>
               </Modal>

                                             {/* -------SinIUp MODAL------- */}
               <Modal title="Создайте учетную запись" classes={classes} visible={visibleModal === 'signUp'} onClose={handleCloseModal}>
                  <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                     <FormGroup aria-label="position" row>
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="name"
                           label="Имя"
                           InputLabelProps={{
                                 shrink: true,
                           }}
                           variant="filled"
                           type="name"
                           fullWidth
                        />
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="email"
                           label="E-Mail"
                           InputLabelProps={{
                                 shrink: true,
                           }}
                           variant="filled"
                           type="email"
                           fullWidth
                        />
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="password"
                           label="Пароль"
                           InputLabelProps={{
                                 shrink: true,
                           }}
                           variant="filled"
                           type="password"
                           fullWidth
                        />
                        <Button variant="contained" color="primary" fullWidth>
                           Далее
                        </Button>
                     </FormGroup>
                  </FormControl>
               </Modal>
            </div>
         </div>
      </div>
   );
};

export default SinIn