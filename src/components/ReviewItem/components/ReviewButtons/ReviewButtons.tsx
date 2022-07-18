import {FC, useState} from 'react'
import {ButtonBase} from '@/components/UI/ButtonBase/ButtonBase'
import {BiLike, BiDislike} from 'react-icons/bi'
import styles from './ReviewButtons.module.scss'

interface ReviewButtonsProps {
    likes: number;
    dislikes: number;
}

export const ReviewButtons: FC<ReviewButtonsProps> = ({likes, dislikes}) => {

    const [like, setLike] = useState<number>(likes || 0)
    const [dislike, setDislike] = useState<number>(dislikes || 0)

    const [status, setStatus] = useState<any>(null)
  
    const handleClickLike = () => {
        if (status === 'like') {
            setStatus(null)
            setLike(like - 1)
        } else {
            setStatus('like')

            if (status==='dislike') {
                setDislike(dislike - 1)
            }

            setLike(like + 1)
        }
    }
  
  const handleClickDislike = () => {
    if (status === 'dislike') {
      setStatus(null)
      setDislike(dislike - 1)
    } else {
      setStatus('dislike')

      if (status==='like') {
        setLike(like - 1)
      }
	  
      setDislike(dislike + 1)
    }
  }

    return (
        <div className={styles.btns}>
            <ButtonBase startIcon={<BiLike />} onClick={handleClickLike} className={styles.like}>
                Полезно
                {like ? <span className={styles.quantity}>{like}</span> : null}
            </ButtonBase>
            <ButtonBase startIcon={<BiDislike />} onClick={handleClickDislike} className={styles.like}>
                Нет
                {dislike ? <span className={styles.quantity}>{dislike}</span> : null}
            </ButtonBase>
        </div>
    )
}