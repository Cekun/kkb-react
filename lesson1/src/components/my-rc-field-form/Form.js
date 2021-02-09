import React from "react";
import useForm from "./useForm";
import FieldContext from "./FieldContext";

export default function Form({children, onFinish, onFinishFailed, form}, ref) {
  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallback({
    onFinish,
    onFinishFailed
  });
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        formInstance.submit();
      }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}

// 数据收集
// Context数据跨层级传递

//useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
//在大多数情况下，应当避免使用 ref 这样的命令式代码。
//useImperativeHandle 应当与 forwardRef 一起使用： https://zh-hans.reactjs.org/docs/hooks-reference.html#basic-hooks
