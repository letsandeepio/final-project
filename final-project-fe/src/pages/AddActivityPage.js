import React from 'react';

import AddActivityForm from '../components/AddActivityForm';

export default function CategoryPage(props) {
  return (
    <section>
      <AddActivityForm
        categories={props.categories}
        showSnackBar={props.showSnackBar}
      />
    </section>
  );
}
