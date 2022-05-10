import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownItem {
    label: string;
    value: string | number | boolean;
}
interface DropdownProps {
    items: DropdownItem[];
}



const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [item, setItem] = useState(items);
    const [loading, setLoading] = useState(false);
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
            />
        </View>
    );
};

export default Dropdown;