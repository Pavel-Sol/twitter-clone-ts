import { Avatar, Paper, Typography, IconButton } from "@material-ui/core"
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { useStylesHome } from "../pages/home/style"

interface Props {
   classes: ReturnType<typeof useStylesHome>;
}

const Tweet:React.FC<Props> = ({classes}) => {
   return(
      <Paper
         variant="outlined"
         className={classes.tweet}>

         <Avatar
            className={classes.tweetAvatar}
            alt={`Аватар пользователя`}
            src='https://oir.mobi/uploads/posts/2019-12/1575744493_3-5.jpg'
        />
        <div>
            <Typography>
               <b>Мария</b>{' '}
               <span className={classes.tweetUserName}>@mashasemyonova</span>
            </Typography>
            <Typography variant="body2">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus culpa aut voluptatibus,  perferendis consectetur exercitationem adipisci laborum corporis at ipsum. corporis at ipsum.
            </Typography>
            <div className={classes.tweetFooter}>
               <div>
                  <IconButton color="primary">
                     <CommentIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                  <span>1</span>
               </div>
               <div>
                  <IconButton color="primary">
                     <RepostIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                  <span>10</span>
               </div>
               <div>
                  <IconButton color="primary">
                     <LikeIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                  <span>7</span>
               </div>
               <div>
                  <IconButton color="primary">
                     <ShareIcon className={classes.tweetFooterIcon} />
                  </IconButton>
               </div>
            </div>
        </div>
      </Paper>
   )
}

export default Tweet