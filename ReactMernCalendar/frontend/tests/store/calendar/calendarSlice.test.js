import {
    calendarSlice,
    onAddNewEvent,
    onDeleteEvent,
    onLoadEvents,
    onLogoutCalendar,
    onSetActiveEvent,
    onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
    calendarWithActiveEventState,
    calendarWithEventsState,
    events,
    initialState,
} from '../../fixtures/calendarStates';

describe('Pruebas en calendarSlice', () => {
    test('debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    });

    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer(
            calendarWithEventsState,
            onSetActiveEvent(events[0])
        );
        //console.log(state)
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent debe de agregar el evento', () => {
        const newEvent = {
            id: '3',
            start: new Date('2020-10-21 13:00:00'),
            end: new Date('2020-10-21 15:00:00'),
            title: 'Cumpleaños de Miguel!!',
            notes: 'Alguna nota!!',
        };

        const state = calendarSlice.reducer(
            calendarWithEventsState,
            onAddNewEvent(newEvent)
        );
        //console.log(state)
        expect(state.events).toEqual([...events, newEvent]);
    });

    test('onUpdateEvent debe de actualizar el evento', () => {
        const updatedEvent = {
            id: '1',
            start: new Date('2020-10-21 13:00:00'),
            end: new Date('2020-10-21 15:00:00'),
            title: 'Cumpleaños de Miguel actualizado',
            notes: 'Alguna nota actualizada',
        };

        const state = calendarSlice.reducer(
            calendarWithEventsState,
            onUpdateEvent(updatedEvent)
        );
        //console.log('evento original ',calendarWithActiveEventState.events[0],'evento actualizado',state)

        expect(state.events).toContain(updatedEvent);
    });

    test('onDeleteEvent debe de borrar el evento activo', () => {
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(
            calendarWithActiveEventState,
            onDeleteEvent()
        );
        //console.log("estado antes",calendarWithActiveEventState,"estado despues ",state);
        expect(state.activeEvent).toBe(null);
        expect(state.events).not.toContain(events[0]);
    });

    test('onLoadEvents debe de establecer los eventos', () => {
        // initialState
        const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        //console.log({initialState}, "nuevo estado:",{...state});
        expect(state.isLoadingEvents).toBeFalsy();
        expect(state.events).toEqual(events);

        const newState = calendarSlice.reducer(state, onLoadEvents(events));
        // console.log(
        //     'cantidad de eventos en el estado',
        //     state.events.length,
        //     'cantidad de eventos recibidos',
        //     events.length
        // );
        expect(state.events.length).toBe(events.length);
    });

    test('onLogoutCalendar debe de limpiar el estado', () => {
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(
            calendarWithActiveEventState,
            onLogoutCalendar()
        );
        // console.log(
        //     'estado antes',
        //     calendarWithActiveEventState,
        //     'estado despues ',
        //     state
        // );
        expect(state).toEqual(initialState);
    });
});
