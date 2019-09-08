import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as S from './styles';

export default function TeamApplyForm() {
  return (
    <S.Form>
      <h2>단체전 신청하기</h2>
      <Formik
        initialValues={{
          city: '',
          range: '',
          player1: '',
          player2: '',
          player3: '',
          player4: '',
          player5: '',
          substitute: '',
          mobile: '',
          date: '',
          round: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          city: Yup.string().required('시/군/구를 입력해 주세요.'),
          range: Yup.string().required('소속 활터를 입력해 주세요.'),
          player1: Yup.string().required('이름을 입력해 주세요.'),
          player2: Yup.string().required('이름을 입력해 주세요.'),
          player3: Yup.string().required('이름을 입력해 주세요.'),
          player4: Yup.string().required('이름을 입력해 주세요.'),
          player5: Yup.string().required('이름을 입력해 주세요.'),
          substitute: Yup.string().required('이름을 입력해 주세요.'),
          mobile: Yup.string()
            .required('휴대폰 번호를 입력해 주세요.')
            .matches(
              /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/,
              '유효하지 않은 휴대폰 번호 입니다.'
            ),
          date: Yup.string().required('날짜를 선택해 주세요.'),
          round: Yup.string().required('작대를 선택해 주세요.'),
          password: Yup.string()
            .required('비밀번호를 입력해 주세요.')
            .min(4, '최소 4자 이상 입력해 주세요.'),
          confirmPassword: Yup.string()
            .required('비밀번호 확인을 입력해 주세요.')
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            window.alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => {
          return (
            <Form>
              <div>
                <label htmlFor="city">시/군/구</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="span" />
              </div>

              <div>
                <label htmlFor="range">소속정</label>
                <Field type="text" name="range" />
                <ErrorMessage name="range" component="span" />
              </div>

              <div>
                <label htmlFor="player1">선수 1 이름</label>
                <Field id="player1" type="text" name="player1" />
                <ErrorMessage name="player1" component="span" />
              </div>

              <div>
                <label htmlFor="player2">선수 2 이름</label>
                <Field id="player2" type="text" name="player2" />
                <ErrorMessage name="player2" component="span" />
              </div>

              <div>
                <label htmlFor="player3">선수 3 이름</label>
                <Field id="player3" type="text" name="player3" />
                <ErrorMessage name="player3" component="span" />
              </div>

              <div>
                <label htmlFor="player4">선수 4 이름</label>
                <Field id="player4" type="text" name="player4" />
                <ErrorMessage name="player4" component="span" />
              </div>

              <div>
                <label htmlFor="player5">선수 5 이름</label>
                <Field id="player5" type="text" name="player5" />
                <ErrorMessage name="player5" component="span" />
              </div>

              <div>
                <label htmlFor="substitute">예비선수 이름</label>
                <Field id="substitute" type="text" name="substitute" />
                <ErrorMessage name="substitute" component="span" />
              </div>

              <div>
                <label htmlFor="mobile">휴대폰 번호</label>
                <Field
                  type="tel"
                  name="mobile"
                  placeholder="-없이 입력해 주세요. e.g. 01012342345"
                />
                <ErrorMessage name="mobile" component="span" />
              </div>

              <div>
                <label htmlFor="round">작대</label>
                <Field id="round" component="select" name="round">
                  <option value="" disabled>
                    작대를 선택해 주세요
                  </option>
                  <option value="1">1대 (09:15 개사)</option>
                  <option value="2">2대 (09:15 개사)</option>
                  <option value="3">3대 (09:15 개사)</option>
                  <option value="4">4대 (09:30 개사)</option>
                  <option value="5">5대 (09:30 개사)</option>
                  <option value="6">6대 (09:30 개사)</option>
                </Field>
                <ErrorMessage name="round" component="span" />
              </div>

              <div>
                <label htmlFor="password">
                  비밀번호
                  <span>(신청 내용 수정/삭제에 사용합니다)</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="4자 이상 입력해 주세요."
                />
                <ErrorMessage name="password" component="span" />
              </div>

              <div>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="span" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                신청하기
              </button>
            </Form>
          );
        }}
      </Formik>
    </S.Form>
  );
}