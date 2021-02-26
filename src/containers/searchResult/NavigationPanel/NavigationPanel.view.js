import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
 
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 5rem',
  },
  linkHome: {
    color: 'black',
    margin: '1rem 0 2rem 0',
  },
  labelGroup: {
    display: 'flex',
    alignItems: 'end',
  },
  label1: {
    fontSize: '14px',
  },
  label2: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  label3: {
    alignSelf: 'flex-end',
    marginLeft: '1rem',
    fontSize: '1rem',
  },
  lineGroup: {
    width: '100%',
    margin: '1rem 0 1.6rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  line: {
    width: '100%',
    height: '1px',
    background: 'rgb(238,238,238)',
    background: 'rgb(160,160,160)',
  },
  topLabel: {
    margin: '1rem 3rem 1rem 0',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLabel2: {
    margin: '1rem 0 1rem 0',
    color: '#4D4D4D',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLabelText: {
    marginRight: '1rem',
    color: 'rgb(165,165,165)',
  },
  topLabelsGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  topLabelsGroupLeft: {
    display: 'flex',
    marginLeft: '2rem',
  },
  topLabelsGroupRight: {
    marginRight: '1rem',
    display: 'flex',
  },
  bottomGroup: {
    margin: '1rem 0 1.5rem 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: theme.spacing(1),
  },
}));
 
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'assetName', headerName: 'Asset Name', width: 220 },
  { field: 'relatedData', headerName: 'Related Data Entities', width: 220 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'platform', headerName: 'Platform', width: 130 },
  { field: 'dataDomain', headerName: 'Data Domain', width: 150 },
  { field: 'layer', headerName: 'Layer', width: 110 },
  { field: 'more', headerName: 'More', width: 90 },
];
 
const rows = [
  {
    id: 1,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.THERAPEUTIC_AREA',
    relatedData: 'Therapeutic Area',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 2,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.SUBJECT_VISIT',
    relatedData: 'Subject Visit',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 3,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY_SUBJECT',
    relatedData: 'Study Subject',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 4,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.NONE',
    relatedData: '',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 5,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site Personnel',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 6,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site Event',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 7,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 8,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Scenario Event',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 9,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Scenario',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 10,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Risk Issue Survey',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
 
  {
    id: 11,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site Personnel',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 12,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site Event',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 13,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Site',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 14,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Scenario Event',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 15,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Scenario',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 16,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY',
    relatedData: 'Study Risk Issue Survey',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
 
  {
    id: 17,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.THERAPEUTIC_AREA',
    relatedData: 'Therapeutic Area',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 18,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.SUBJECT_VISIT',
    relatedData: 'Subject Visit',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 19,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.STUDY_SUBJECT',
    relatedData: 'Study Subject',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
  {
    id: 20,
    assetName: 'DS_CLINICAL_OPERATIONS_UNIFIED.SOME',
    relatedData: 'Some',
    type: 'Data set',
    platform: 'FormulaOne',
    dataDomain: 'Drug Development',
    layer: 'Unified',
    more: '...'
  },
 
 
 
];
 
 
const NavigationPanelView = (props) => {
  const classes = useStyles();
 
  return(
    <div className={classes.root}>
      <Link component={RouterLink} to="/main" className={classes.linkHome}>
        {'HOME>'}
      </Link>
      <div className={classes.label1}>search for :</div>
      <div className={classes.labelGroup}>
        <div className={classes.label2}>{"\"Clinical operations\""}</div>
        <div className={classes.label3}>{'[ 124]'}</div>
      </div>
 
      <div className={classes.lineGroup}>
        <div className={classes.line} />
 
        <div className={classes.topLabelsGroup}>
          <div className={classes.topLabelsGroupLeft}>
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Domain'}
              </div>
              <ExpandMoreIcon />
            </div>
 
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Region'}
              </div>
              <ExpandMoreIcon />
            </div>
 
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Program'}
              </div>
              <ExpandMoreIcon />
            </div>
 
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Type'}
              </div>
              <ExpandMoreIcon />
            </div>
 
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Platform'}
              </div>
              <ExpandMoreIcon />
            </div>
 
            <div className={classes.topLabel}>
              <div className={classes.topLabelText}>
                {'Layers'}
              </div>
              <ExpandMoreIcon />
            </div>
          </div>
 
          <div className={classes.topLabelsGroupRight}>
          <div className={classes.topLabel2}>
              <div className={classes.topLabelText}>
                {'More Filters'}
              </div>
              <AddIcon />
            </div>
          </div>
 
        </div>
 
        <div className={classes.line} />
      </div>
 
      <div style={{ height: 630, width: '100%', background: 'white' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      </div>
      <div className={classes.bottomGroup}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default NavigationPanelView