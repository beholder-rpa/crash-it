import { observer } from 'mobx-react';

const AppSettingsContent = () => {
  return (
    <div className="absolute inset-0 px-4 sm:px-6">
      <a target="_blank" href="/api/doSomething">
        <button className="btn btn-primary">Do Something</button>
      </a>
    </div>
  );
};

export default observer(AppSettingsContent);
