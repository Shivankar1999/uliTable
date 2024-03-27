
"use client"
import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const TableForm = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log(selectedKeys,"selectedKeys");
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={`Search ${dataIndex}`}
          onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          value={selectedKeys[0]}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <button onClick={() => handleReset(clearFilters)} style={{ width: 90, marginRight: 8 }}>
          Reset
        </button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: text =>
      searchedColumn === dataIndex ? (
        <span style={{ backgroundColor: '#ffc069' }}>{text}</span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'Model',
      dataIndex: 'Model',
      key: 'Model',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
      ...getColumnSearchProps('Type'),
    },
    {
      title: 'Manufacturer',
      dataIndex: 'Manufacturer',
      key: 'Manufacturer',
      ...getColumnSearchProps('Manufacturer'), 
    },
    {
      title: 'Manufacturing Date',
      dataIndex: 'Manufacturing Date',
      key: 'Manufacturing Date',
    },
    {
      title: 'Seating',
      dataIndex: 'Seating',
      key: 'Seating',
    },
  ];

  return (
    <div className="container border border-gray shadow-md hover:shadow-lg px-1 width-full mx-auto my-auto">
    {data ?  <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 'max-content' }}
      /> : "Fetching Data..." }
     
    </div>
  );
};

export default  TableForm;
