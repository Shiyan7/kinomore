import {FC, useState} from 'react'
import {ButtonBase} from '@/components/UI/ButtonBase/ButtonBase'
import {BiLike, BiDislike} from 'react-icons/bi'
import styles from './ReviewButtons.module.scss'
import classNames from 'classnames';

interface ReviewButtonsProps {
    likes: number;
    dislikes: number;
}

export const ReviewButtons: FC<ReviewButtonsProps> = ({likes, dislikes}) => {

    const [like, setLike] = useState<number>(likes || 0)
    const [dislike, setDislike] = useState<number>(dislikes || 0)

    const [liked, setLiked] = useState<boolean | null>(null)
  
    const handleClickLike = () => {
        if (liked) {
            setLiked(null)
            setLike(like - 1)
        } else {
            setLiked(true)

            if (liked) {
                setDislike(dislike - 1)
            }

            setLike(like + 1)
        }
    }
  
	const handleClickDislike = () => {
		if (liked === false) {
			setLiked(null)
			setDislike(dislike - 1)
		} else {
			setLiked(false)

			if (liked) {
				setLike(like - 1)
			}
			
			setDislike(dislike + 1)
		}
	}

    return (
        <div className={styles.btns}>
            <ButtonBase startIcon={<BiLike />} onClick={handleClickLike} className={classNames(styles.btn, styles.like, liked && styles.active)}>
                Полезно
                {like ? <span className={styles.quantity}>{like}</span> : null}
            </ButtonBase>
            <ButtonBase startIcon={<BiDislike />} onClick={handleClickDislike} className={classNames(styles.btn, styles.dislike, liked === false && styles.active)}>
                Нет
                {dislike ? <span className={styles.quantity}>{dislike}</span> : null}
            </ButtonBase>
        </div>
    )
}