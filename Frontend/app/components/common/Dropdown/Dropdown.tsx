import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownItem {
    label: string;
    value: string | number | boolean;
}
interface DropdownProps {
    items: DropdownItem[];
    onChange: (...event: any[]) => void;
}



const Dropdown: React.FC<DropdownProps> = ({ items, onChange }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [item, setItem] = useState(items);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        onChange(value);
    }, [value]);
    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={item}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItem}
                loading={loading}
                closeAfterSelecting={true}
                listMode="SCROLLVIEW"
            />
        </View>
    );
};

export default Dropdown;