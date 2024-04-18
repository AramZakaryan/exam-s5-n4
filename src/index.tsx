// 67%


// // // // // // import React from 'react'
// // // // // // import ReactDOM from 'react-dom/client';
// // // // // //
// // // // // // export const App = () => {
// // // // // //     return (
// // // // // //         <div>
// // // // // //             <h2>Какое из приведенных ниже определений верно ?</h2>
// // // // // //             <ul>
// // // // // //                 <li>1 - После того как файл был проиндексирован с помощью git init и закоммичен, git будет отслеживать все
// // // // // //                     следующие изменения в нём.
// // // // // //                 </li>
// // // // // //                 <li>2 - Ветки в Git представляют собой указатель на коммит. Если нужно добавить какую-то фичу или исправить баг
// // // // // //                     (незначительный или серьезный), мы создаём новую ветку. Она будет содержать все изменения, которые мы хотим
// // // // // //                     добавить в репозиторий.
// // // // // //                 </li>
// // // // // //                 <li>3 - Команда git add создает новый репозиторий Git. С ее помощью можно преобразовать существующий проект без
// // // // // //                     управления версиями в репозиторий Git или инициализировать новый пустой репозиторий
// // // // // //                 </li>
// // // // // //                 <li>4 - Ни одно из вышеперечисленных определений не верно</li>
// // // // // //             </ul>
// // // // // //         </div>
// // // // // //     )
// // // // // // }
// // // // // //
// // // // // //
// // // // // // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// // // // // // root.render(<App/>);
// // // // // //
// // // // // // // 📜 Описание:
// // // // // // // Какое из приведенных ниже определений верно ?
// // // // // // // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // // // // // // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // // // // // // Если указали правильно один вариант (1),
// // // // // // // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
// // // // // //
// // // // // // // 🖥 Пример ответа: 1
// // // // // //
// // // // // // wrong answer 1 2
// // // // //
// // // // // export const App = () => {
// // // // //     return (
// // // // //         <div>
// // // // //             <h2>В каком случае возникают конфликты при слиянии веток ?</h2>
// // // // //             <ul>
// // // // //                 <li>1 - В случае, когда в обеих ветках есть изменения одних и тех же строк</li>
// // // // //                 <li>2 - В случае когда ветки были созданы от разных коммитов</li>
// // // // //                 <li>3 - В случае когда ветки были созданы в разное время</li>
// // // // //                 <li>4 - Конфликты не возникают, это устаревшая проблема. Сегодня git под капотом все сам может разрулить</li>
// // // // //                 <li>5 - Нет правильного ответа</li>
// // // // //             </ul>
// // // // //         </div>
// // // // //     )
// // // // // }
// // // // //
// // // // // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// // // // // root.render(<App/>);
// // // // // // 📜 Описание:
// // // // // // В каком случае возникают конфликты при слиянии веток ?
// // // // // // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // // // // // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // // // // // Если указали правильно один вариант (1),
// // // // // // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
// // // // //
// // // // // // 🖥 Пример ответа: 1
// // // //
// // // // import ReactDOM from 'react-dom/client';
// // // // import React, { FC, ReactNode } from 'react'
// // // //
// // // // const quizStyle: React.CSSProperties = {
// // // //     background: 'lightgreen',
// // // //     padding: '10px',
// // // //     margin: '10px'
// // // // }
// // // //
// // // // type BtnPropsType = {
// // // //     question: ReactNode
// // // //     children: ReactNode
// // // // }
// // // //
// // // // const Block: FC<BtnPropsType> = ({question, children}) => {
// // // //     return (
// // // //         <div style={{display: 'flex', alignItems: 'center'}}>
// // // //             {question} = {children}
// // // //         </div>
// // // //     )
// // // // }
// // // //
// // // //
// // // // const quiz = [
// // // //     {id: 1, question: '1 + 1', answer: '2'},
// // // //     {id: 2, question: '2 + 2', answer: '4'},
// // // //     {id: 3, question: '3 + 3', answer: '6'},
// // // // ]
// // // //
// // // // const App = () => {
// // // //
// // // //     return (
// // // //         <div>
// // // //             {quiz.map((q) => {
// // // //                 return (
// // // //                     <Block question={<h2 style={quizStyle}>{q.question}</h2>}>
// // // //                     {/* <Block question={'❗❗❗ XXX ❗❗❗'}>*/}
// // // //                         {<h2 style={quizStyle}>{q.answer}</h2>}
// // // //                         {/*    ❗❗❗ YYY ❗❗❗*/}
// // // //                     </Block>
// // // //                 )
// // // //             })}
// // // //         </div>
// // // //     )
// // // // }
// // // //
// // // // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// // // // root.render(<App/>);
// // // //
// // // // // 📜 Описание:
// // // // // Что необходимо написать вместо XXX и YYY, чтобы на экране отобразились вопросы и ответы из массива quiz.
// // // // // 1 + 1 = 2
// // // // // 2 + 2 = 4
// // // // // 3 + 3 = 6
// // // // // ❗ Вопрос и ответ должны быть тегом h2 и к ним должен быть прикреплен стиль quizStyle
// // // // // ❗ Ответ дайте через пробел
// // // //
// // // // // 🖥 Пример ответа: quiz[0]=yes redux=h2
// // //
// // //
// // // import ReactDOM from 'react-dom/client';
// // // import React from 'react';
// // //
// // // export const Jpegs = () => {
// // //
// // //     return (
// // //         <div>
// // //             <iframe
// // //
// // //                 src="//coub.com/embed/2wp0wa?muted=false&autostart=false&originalSize=false&startWithHD=true"
// // //                 frameBorder="0"
// // //                 width="640"
// // //                 height="360"
// // //                 allow="autoplay"
// // //                 allowFullScreen
// // //             />
// // //         </div>
// // //     )
// // // }
// // //
// // // const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// // // root.render(<Jpegs/>);
// // //
// // // // 📜 Описание:
// // // // Пользователи жалуются, что нельзя развернуть видео на весь экран
// // // // В качестве ответа укажите исправленную или добавленную строку кода
// // // //
// // // // 🖥 Пример ответа: iframe.станьНаВесьЭкранПожалуйста()
// //
// // import ReactDOM from "react-dom/client";
// // import { ThunkAction, ThunkDispatch } from "redux-thunk";
// // import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// // import React, { FC, useEffect } from "react";
// // import axios from "axios";
// // import { configureStore, combineReducers } from "@reduxjs/toolkit";
// //
// // // Styles
// // const table: React.CSSProperties = {
// //     borderCollapse: "collapse",
// //     width: "100%",
// //     tableLayout: "fixed",
// // };
// //
// // const th: React.CSSProperties = {
// //     padding: "10px",
// //     border: "1px solid black",
// //     background: "lightgray",
// //     cursor: "pointer",
// // };
// //
// // const td: React.CSSProperties = {
// //     padding: "10px",
// //     border: "1px solid black",
// // };
// //
// // const thActive: React.CSSProperties = {
// //     padding: "10px",
// //     border: "1px solid black",
// //     background: "lightblue",
// //     cursor: "pointer",
// // };
// //
// // // Types
// // type UserType = {
// //     id: string;
// //     name: string;
// //     age: number;
// // };
// //
// // type UsersResponseType = {
// //     items: UserType[];
// //     totalCount: number;
// // };
// //
// // type ParamsType = {
// //     sortBy: string | null;
// //     sortDirection: "asc" | "desc" | null;
// // };
// //
// // // API
// // const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.ru/api/" });
// //
// // const api = {
// //     getUsers(params?: ParamsType) {
// //         return instance.get<UsersResponseType>("users", { params });
// //     },
// // };
// //
// // // Reducer
// // const initState = {
// //     users: [] as UserType[],
// //     params: {
// //         sortBy: "name",
// //         sortDirection: "asc",
// //     } as ParamsType,
// // };
// // type InitStateType = typeof initState;
// //
// // const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
// //     switch (action.type) {
// //         case "SET_USERS":
// //             return { ...state, users: action.users };
// //         case "SET_PARAMS":
// //             return { ...state, params: { ...state.params, ...action.payload } };
// //         default:
// //             return state;
// //     }
// // };
// //
// // // Store
// // const rootReducer = combineReducers({ app: appReducer });
// //
// // const store = configureStore({ reducer: rootReducer });
// // type RootState = ReturnType<typeof store.getState>;
// // type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// // type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// // const useAppDispatch = () => useDispatch<AppDispatch>();
// // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// //
// // const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// // const setParamsAC = (payload: ParamsType) => ({ type: "SET_PARAMS", payload }) as const;
// // type ActionsType =
// //     | ReturnType<typeof setUsersAC>
// //     | ReturnType<typeof setParamsAC>
// //
// // // Thunk
// // const getUsersTC = (): AppThunk => (dispatch, getState) => {
// //     const params = getState().app.params;
// //     api.getUsers(params).then((res) => dispatch(setUsersAC(res.data.items)));
// // };
// //
// // export const Users = () => {
// //     const users = useAppSelector((state) => state.app.users);
// //     const sortBy = useAppSelector((state) => state.app.params.sortBy);
// //     const sortDirection = useAppSelector((state) => state.app.params.sortDirection);
// //
// //     const dispatch = useAppDispatch();
// //
// //     useEffect(() => {
// //         dispatch(getUsersTC());
// //     }, [sortBy, sortDirection]);
// //
// //     const sortHandler = (sortBy: string) => {
// //         const direction = sortDirection === "asc" ? "desc" : "asc";
// //         dispatch(setParamsAC({ sortBy, sortDirection: direction }));
// //     };
// //
// //     return (
// //         <div>
// //             <h1>👪 Список пользователей</h1>
// //             <table style={table}>
// //                 <thead>
// //                 <tr>
// //                     <Th name={"name"} sortHandler={sortHandler} />
// //                     <Th name={"age"} sortHandler={sortHandler} />
// //                 </tr>
// //                 </thead>
// //                 <tbody>
// //                 {users.map((u) => {
// //                     return (
// //                         <tr key={u.id}>
// //                             <td style={td}>{u.name}</td>
// //                             <td style={td}>{u.age}</td>
// //                         </tr>
// //                     );
// //                 })}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };
// //
// // type ThPropsType = {
// //     name: string;
// //     sortHandler: (name: string) => void;
// // };
// //
// // const Th: FC<ThPropsType> = ({ name, sortHandler }) => {
// //     const sortBy = useAppSelector((state) => state.app.params.sortBy);
// //     const sortDirection = useAppSelector((state) => state.app.params.sortDirection);
// //
// //     const condition1 = sortBy===name;
// //     // const condition1 = "❗❗❗ XXX ❗❗❗";
// //     const condition2 = sortDirection==="desc";
// //     // const condition2 = "❗❗❗ YYY ❗❗❗";
// //
// //     return (
// //         <th style={condition1 ? thActive : th} onClick={() => sortHandler(name)}>
// //             {name}
// //             {condition1 && (condition2 ? <span> ⬆</span> : <span> ⬇</span>)}
// //         </th>
// //     );
// // };
// //
// // const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// // root.render(
// //     <Provider store={store}>
// //         <Users />
// //     </Provider>,
// // );
// //
// // // 📜 Описание:
// // // Перед вами таблица с пользователями.
// // // Покликайте по вкладкам age и name и убедитесь, что сортировка работает верно,
// // // но в шапке некорректно отображаются стрелки и не видно активной колонки
// // // Ваша задача написать правильные условия вместо XXX и YYY, чтобы:
// // // 1) Стрелки соответствовали сортировке (если сортировка от меньшего к большему, то стрелка вверх)
// // // 2) Шапка активной колонки была голубая, а неактивной серая
// // // ❗ Ответ дайте через пробел
// //
// // // 🖥 Пример ответа: a === '1' b !== a
// //
// // /////// wrong answer
//
// import ReactDOM from 'react-dom/client';
// import React, { useState } from 'react'
//
// export const Jpegs = () => {
//     const [fileURL, setFileURL] = useState<any>()
//
//     const onChange = (e: any) => {
//         const maybeFile = e.target.files?.[0]
//         if (maybeFile) {
//             if (maybeFile.type === 'image/jpeg') {
//                 setFileURL(URL.createObjectURL( maybeFile))
//                 return
//             } else alert('not .jpg!')
//         }
//         setFileURL('')
//     }
//
//
//     return (
//         <div>
//             <input
//                 type={'file'}
//                 onChange={onChange}
//
//             />
//             {fileURL && (
//                 <img
//                     src={fileURL}
//                     alt={'avatar'}
//
//                 />
//             )}
//         </div>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Jpegs/>);
//
// // 📜 Описание:
// // Не отображается картинка при выборе.
// // В качестве ответа укажите исправленную версию строки кода
// //
// // 🖥 Пример ответа: value={fileURL}
//
