import { useCallback, useEffect, useState } from 'react';
import { Grid } from './modules/grid';
import { Messages } from './modules/messages';
import { Panel } from './components/layout/panel';
import { Select } from './components/ui/select';
import { Button } from './components/ui/button';
import MessagesProvider from './store/providers/messages-provider';

import './app.scss';

function App() {
  const [modes, setModes] = useState([]);
  const [selectedGridSize, setSelectedGridSize] = useState(0);
  const [isChangeModeInitiated, setIsChangeModeInitiated] = useState(false);
  const [isModeApplied, setIsModeApplied] = useState(false);
  const [messages, setMessages] = useState([]);

  const fetchModes = useCallback(async () => {
    try {
      const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setModes(data);
    } catch (e) {
      console.log(e)
    }
  }, []);

  useEffect(() => {
    fetchModes();
  }, [fetchModes]);

  useEffect(() => {
    setIsModeApplied(true);
  }, [isChangeModeInitiated]);

  const modesFormSubmitHandler = useCallback((e) => {
    e.preventDefault();
    setIsModeApplied(false);
    setIsChangeModeInitiated(value => !value);
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setSelectedGridSize(+formJson.mode);
    setMessages([]);
  }, []);

  return (
    <div className="page">
      <div className="page__content page__content--columns">
        <MessagesProvider messagesData={{messages, setMessages}}>
          <Panel>
            <div className="actions">
              <form className="actions__form" onSubmit={modesFormSubmitHandler}>
                <Select modes={modes} />
                <Button type="submit" className="button--primary">Start</Button>
              </form>
            </div>
            <div className="grid-wrapper">
              {!!selectedGridSize && isModeApplied &&
                <Grid gridSize={selectedGridSize} />
              }
            </div>
          </Panel>
          <Panel>
            <Messages />
          </Panel>
        </MessagesProvider>
      </div>
    </div>
  );
}

export default App;
