import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { TextField } from '@/UI/TextField/TextField';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';
import { useOnClickOutside } from 'usehooks-ts';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchList } from './components/SearchList/SearchList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import styles from './Search.module.scss';
import classNames from 'classnames';

export const Search = () => {
	const { visible } = useTypedSelector((state) => state.searchReducer);
	const { setSearch, setVisible } = useActions();
	const [value, setValue] = useState<string>('');
	const { debouncedValue, setDebouncedValue } = useDebounce(value.trim(), 300);
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
		e.preventDefault();
		setSearch(value);
		router.push(`/search/${value}`);
	};

	useEffect(() => {
		setVisible(false);
		setValue('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);

	const handleClearInput = () => {
		setValue('');
		setVisible(false);
		setDebouncedValue('');
	};

	useOnClickOutside(formRef, () => setVisible(false));

	const isActive = debouncedValue && visible;

	const openSearch = () => {
		setVisible(true);
		inputRef.current?.focus();
	};

	return (
		<>
			<form
				onSubmit={submitForm}
				ref={formRef}
				action="#"
				className={classNames(styles.form, visible && styles.visible)}
			>
				<TextField
					className={styles.search}
					ref={inputRef}
					variant="dark"
					type="search"
					value={value}
					onChange={handleChange}
					placeholder="Поиск..."
					onClick={() => setVisible(true)}
				/>
				<ButtonBase
					ripple
					type="button"
					className={styles.hideSearch}
					onClick={() => setVisible(false)}
				>
					<FiChevronLeft />
				</ButtonBase>
				<ButtonBase
					ripple
					type="button"
					className={classNames(styles.closeBtn, value && styles.active)}
					onClick={handleClearInput}
				>
					<FiX />
				</ButtonBase>
				<ButtonBase
					ripple
					className={styles.searchBtn}
					disabled={!value.length}
					onClick={submitForm}
				>
					<FiSearch />
				</ButtonBase>
				{isActive && <SearchList value={debouncedValue} />}
			</form>
			<ButtonBase onClick={openSearch} className={styles.openSearch}>
				<FiSearch />
			</ButtonBase>
		</>
	);
};
