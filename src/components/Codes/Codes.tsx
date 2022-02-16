import {Accordings} from '../Accordings'
import styles from './codes.module.css'
import { info, success, client}  from '../../data'

enum Titles {
	info = 'Информационные 100 - 199',
	success = 'Успешные 200 - 299',
	client = 'Клиентские ошибки 400 - 499', 
	server = 'Серверные ошибки 500 - 599'
}

export const Codes = () => {

  return (
    <div className={styles.codes_container}>
      <Accordings accordings={info} title={Titles.info} className='info_codes' />
      <Accordings accordings={success} title={Titles.success} className={'success_codes'}/>
      <Accordings accordings={client} title={Titles.client} className={'client_codes'}/>
    </div>
    
  )
} 